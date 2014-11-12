Package.describe({
  summary:  'Impact (alpha) temporary entry package',
  name:     'impact:entry',
  version:  '0.1.0',
});

Package.on_use(function (api, where) {
  
  api.use(['impact:impact'], ['client', 'server']);
  api.imply(['impact:impact'], ['client', 'server']);

  api.add_files([
    'client/views/enter/forgot.html',
    'client/views/enter/forgot.js',
    'client/views/enter/initialize.html',
    'client/views/enter/initialize.js',
    'client/views/enter/invited.html',
    'client/views/enter/invited.js',
    'client/views/enter/login.html',
    'client/views/enter/login.js',
    'client/views/enter/_routes.js',
    
  ], 'client');

  api.addFiles([
    'server/setup.js',
    'server/publish.js',
    'server/initialize.js',
    'server/fakeData.js',
  ], 'server');

});
