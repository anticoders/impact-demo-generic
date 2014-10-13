Package.describe({
  summary:  'Impact (alpha)',
  name:     'impact:module-newsletter',
  version:  '0.1.0',
  git: " \* Fill me in! *\ "
});

Package.on_use(function (api, where) {

  api.versionsFrom('METEOR@0.9.3');

  api.use(['impact:impact'], ['client', 'server']);
  api.imply(['impact:impact'], ['client', 'server']);
  
  // Q to HOG:
  // can I add files automatically?

  api.addFiles([
    'both/index.js',
    'both/model.js',
  ], ['client', 'server']);

  api.addFiles([
    'client/config.js',
    'client/subscribe.js',
    'client/views/newsletter_list.html',
    'client/views/newsletter_list.js',
    'client/views/subscriber_list.html',
    'client/views/subscriber_list.js',
    'client/views/add_newsletter.html',
    'client/views/add_newsletter.js',
    'client/views/add_subscriber.html',
    'client/views/add_subscriber.js',
  ], 'client');

  api.addFiles([
    'server/allow.js',
    'server/fake.js',
    'server/observe.js',
    'server/publish.js',
  ], 'server');

});


// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('impact:module-newsletter');
//   api.addFiles('impact:module-newsletter-tests.js');
// });
