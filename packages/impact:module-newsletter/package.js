Package.describe({
  summary:  'Impact (alpha)',
  name:     'impact:module-newsletter',
  version:  '0.1.0',
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.addFiles('impact:module-newsletter.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('impact:module-newsletter');
  api.addFiles('impact:module-newsletter-tests.js');
});
