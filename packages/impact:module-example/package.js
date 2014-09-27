Package.describe({
  summary:  'Impact (alpha)',
  name:     'impact:module-example',
  version:  '0.1.0',
});

Package.on_use(function (api, where) {
    
  api.use(['impact:impact'], ['client', 'server']);
  api.imply(['impact:impact'], ['client', 'server']);
  
  api.add_files([
    'both/index.js',
  ], ['client', 'server']);

  api.addFiles([
    'client/views/example.html',
    'client/dashboard/dashboard.html',
    'client/dashboard/fruits.html',
    'client/dashboard/stones.html',
    'client/config.js',
  ], 'client');

});
