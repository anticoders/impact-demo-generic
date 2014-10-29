Package.describe({
  summary:  'Impact (alpha)',
  name:     'impact:module-forum',
  version:  '0.1.0',
});

Package.onUse(function (api, where) {
  
  
  api.use(['impact:impact'], ['client', 'server']);
  api.imply(['impact:impact'], ['client', 'server']);


  api.addFiles([

  ], ['client', 'server']);

  api.addFiles([

  ], 'client');

  api.addFiles([

  ], 'server');

});
