Package.describe({
  summary: 'Impact (alpha)',
  name:     'impact:widget-cover',
  version:  '0.1.0',
});

Package.on_use(function (api, where) {
  
  api.use(['impact:impact'], ['client', 'server']);
  api.imply(['impact:impact'], ['client', 'server']);


  api.add_files([
    'both/index.js',
  ], ['client', 'server']);

  api.add_files([
    'client/dashboard.html',
    'client/dashboard.js',
    'client/routes.js',
  ], 'client');

  api.add_files([
    'server/initData.js',
  ], 'server');
});
