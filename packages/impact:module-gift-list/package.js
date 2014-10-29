Package.describe({
  summary: 'Impact (alpha)',
  name:     'impact:module-gift-list',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.addFiles('impact:module-gift-list.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('impact:module-gift-list');
  api.addFiles('impact:module-gift-list-tests.js');
});
