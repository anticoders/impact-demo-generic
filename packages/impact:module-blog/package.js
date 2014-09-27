Package.describe({
  summary:  'Impact (alpha)',
  name:     'impact:module-blog',
  version:  '0.1.0',
});

Package.onUse(function (api, where) {
  
  
  api.use(['impact:impact'], ['client', 'server']);
  api.imply(['impact:impact'], ['client', 'server']);


  api.addFiles([
    'both/index.js',
    'both/model.js',
  ], ['client', 'server']);

  api.addFiles([
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
  ], 'client');

  api.addFiles([
    'server/allow.js',
    'server/fake.js',
    'server/publish.js',
  ], 'server');

});
