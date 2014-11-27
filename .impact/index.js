var N = {
  path: require('path'),
  fs: require('fs'),
  chokidar: require('chokidar'),
};
var _ = require('underscore');



var go = function() {
  var list = N.fs.readdirSync(N.path.join(process.cwd(), 'packages'));
  _.each(list, function(pname) {
    var path = N.path.join(process.cwd(), 'packages', pname, 'package.impact.js');
    if(!N.fs.existsSync(path)) return;

    var folder = N.path.join(process.cwd(), 'packages', pname);
    var watcher = N.chokidar.watch([
      N.path.join(folder, 'both'),
      N.path.join(folder, 'client'),
      N.path.join(folder, 'server'),
      N.path.join(folder, 'files'),
      N.path.join(folder, 'package.impact.js'),
    ], {
      persistent: true,
      // ignored: /(package\.js$|\b\.|\.build)/,
      ignoreInitial: true,
    });
    watcher.on('all', function(event, path) {
      // console.log("EVENT", event);
      // console.log("PATH", path);
      rewrite(folder, pname);
    });
    rewrite(folder, pname);
  });
};



var rewrite = function(packageFolder, packageName) {
  console.log("REWRITE PACKAGE", packageName);

  var fileLines = N.fs.readFileSync(N.path.join(packageFolder, 'package.impact.js'), 'utf8').split('\n');
  var output = [
    '',
    '// THIS FILE WAS AUTO-GENERATED BY IMPACT.',
    '// DO NOT MODIFY THIS FILE!',
    '// Write to package.impact.js instead.',
    '',
  ];

  _.each(fileLines, function(fileLine, idx) {
    output.push(fileLine);
    if(fileLine.indexOf('//-- IMPACT: FILES --//') === -1) return;

    _.each([
      {dir: 'both', mode: '["client", "server"]'},
      {dir: 'client', mode: '"client"'},
      {dir: 'server', mode: '"server"'},
      {dir: 'files', mode: '"client"'},
    ], function(chunk) {
      if(!N.fs.existsSync(N.path.join(packageFolder, chunk.dir))) return;
      output.push('');
      output.push('  api.addFiles([');
      output = output.concat(loadAndSortFiles(N.path.join(packageFolder, chunk.dir), chunk.dir));
      output.push('  ], ' + chunk.mode + ');');
      output.push('');
    });
  });

  N.fs.writeFile(N.path.join(packageFolder, 'package.js'), output.join('\n'));

};




var loadAndSortFiles = function(folder, dirname) {
  // console.log('----');
  var array = loadFilesFromDir(folder, dirname, 0, 0, 0);
  // console.log(array);
  array.sort(compareFiles);
  array = _.map(array, function(file) {
    return '    "' + file.name + '",';
  });
  return array;
};


var loadFilesFromDir = function(folder, prefix, partsCount, libCount, mainCount) {
  // console.log("", folder);
  var array = [];
  _.each(N.fs.readdirSync(folder), function(file) {
    
    // Ignore hidden files
    if(file.indexOf('.') === 0) return;

    // Ignore ignored files
    if(file.indexOf('-ignore') !== -1) return;


    if(N.fs.lstatSync(N.path.join(folder, file)).isDirectory()) {

      // Fetch files from directory
      array = array.concat(loadFilesFromDir(
        N.path.join(folder, file),
        N.path.join(prefix, file),
        partsCount + 1,
        libCount + (file === 'lib'),
        mainCount + (file === 'main')
      ));

    } else {

      // Fetch a single file
      var filePieces = file.split('.');
      var first = filePieces[0];
      var last = filePieces[filePieces.length - 1];

      array.push({
        name: N.path.join(prefix, file),
        partsCount: partsCount,
        libCount: libCount + (first === 'lib'),
        mainCount: mainCount + (first === 'main'),
        jsCount: + (last === 'js'),
        htmlCount: + (last === 'html'),
      });

    }
  });
  return array;
};


var compareFiles = function(a, b) {
  if(a.jsCount - b.jsCount) return a.jsCount - b.jsCount;
  if(a.htmlCount - b.htmlCount) return -(a.htmlCount - b.htmlCount);
  if(a.libCount - b.libCount) return -(a.libCount - b.libCount);
  if(a.mainCount - b.mainCount) return a.mainCount - b.mainCount;
  if(a.partsCount - b.partsCount) return -(a.partsCount - b.partsCount);
  return a.name.localeCompare(b.name);
};


go();
