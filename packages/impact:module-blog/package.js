Package.describe({
  summary:  'Impact (alpha)',
  name:     'impact:module-blog',
  version:  '0.1.0',
});

Package.onUse(function (api, where) {
  
  
  api.use(['impact:impact'], ['client', 'server']);
  api.imply(['impact:impact'], ['client', 'server']);


  api.addFiles([
    'both/_index.js',
    'both/init.js',
    'both/initDb.js',
    'both/initContent.js',
    'both/initViews.js',
  ], ['client', 'server']);

  api.addFiles([
    'client/content/index/index.html',
    'client/content/index/index.js',
    'client/content/edit/edit.html',
    'client/content/edit/edit.js',

    'client/views/article/article.html',
    'client/views/article/article.js',
    // 'client/views/articleToEdit.html',
    'client/views/list/list.html',
    'client/views/list/list.js',

    // 'client/subscribe.js',
  ], 'client');

  api.addFiles([
    'server/initPrivileges.js',
    'server/initFake.js',
    'server/initPublications.js',
  ], 'server');

});
