Package.describe({
  summary: "Impact (alpha)"
});

Package.on_use(function (api, where) {
  var client = 'client';
  var server = 'server';
  var both = [client, server];


  api.use([
    'accounts-base',
    'deps',
    'fake',
    'handlebars',
    'iron-router',
    'less',
    'moment',
    'templating',
    'timestamp',
    'underscore',
    'unimark',
  ], both);

  api.use('impact', both);


  api.add_files([
    'both/index.js',
  ], both);

  api.add_files([
    'client/dashboard.html',
    'client/dashboard.js',
    'client/routes.js',
  ], client);

  api.add_files([
    'server/initData.js',
  ], server);
});
