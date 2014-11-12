Package.describe({
  summary: 'Impact (alpha)',
  name:     'impact:widget-cover',
  version:  '0.1.0',
});

Package.on_use(function (api, where) {
  
  api.use(['impact:impact'], ['client', 'server']);
  api.imply(['impact:impact'], ['client', 'server']);


  api.addFiles([
    'both/index.js',
    'both/routes.js',
  ], ['client', 'server']);

  api.addFiles([
    'client/_dashboardController.js',
    'client/dashboard.html',
    'client/dashboard.js',
  ], 'client');

  api.addFiles([
    'server/initData.js',
  ], 'server');
});
