Package.describe({
  summary:  'Impact (alpha)',
  name:     'impact:module-forum',
  version:  '0.1.0',
});

Package.onUse(function (api, where) {
   
  api.use(['impact:impact', 'aldeed:autoform'], ['client', 'server']);
  api.imply(['impact:impact'], ['client', 'server']);


  api.addFiles([
    'both/_index.js',
    'both/init.js',
    'both/initContent.js',
    'both/initDb.js',
  ], ['client', 'server']);

  api.addFiles([
    'client/content/index/index.html',
    'client/content/index/index.js',
    'client/content/edit/edit.html',
    'client/content/edit/edit.js',
  ], 'client');

  api.addFiles([
    'server/initPublications.js',
    'server/initPrivileges.js',
  ], 'server');

});
