Package.describe({
  summary: 'Impact (alpha)',
  name:     'impact:module-gift-list',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');

  api.use(['impact:impact'], ['client', 'server']);
  api.use(['templating'], 'client');
  api.imply(['impact:impact'], ['client', 'server']);

  api.addFiles([
    'client/views/giftContainer.html',
    'client/views/giftList.html',
    'client/views/giftItem.html'
  ], 'client');

  api.addFiles([
    'client/test.js'
  ], 'client');
});