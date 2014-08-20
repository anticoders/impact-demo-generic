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
    'both/model.js',
  ], both);

  api.add_files([
    'client/dashboard/dashboard.html',
    'client/dashboard/dashboard.js',
    'client/dashboard/edit.html',
    'client/dashboard/edit.js',

    'client/views/article.html',
    'client/views/article.js',
    'client/views/articleToEdit.html',
    'client/views/list.html',
    'client/views/list.js',

    'client/config.js',
    'client/subscribe.js',
  ], client);

  api.add_files([
    'server/allow.js',
    'server/fake.js',
    'server/publish.js',
  ], server);

});
