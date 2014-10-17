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
    'client/views/newsletterList.html',
    'client/views/newsletterList.js',
    'client/views/subscriberList.html',
    'client/views/subscriberList.js',
    'client/views/addNewsletter.html',
    'client/views/addNewsletter.js',
    'client/views/addSubscriber.html',
    'client/views/addSubscriber.js',
    'client/views/sendEmail.html',
    'client/views/sendEmail.js',
  ], 'client');

  api.addFiles([
    'server/configSender.js',
    'server/allow.js',
    'server/fake.js',
    'server/observe.js',
    'server/publish.js',
    'server/sendNewsletter.js',
    'server/removeNewsletter.js',
  ], 'server');

});


// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('impact:module-newsletter');
//   api.addFiles('impact:module-newsletter-tests.js');
// });
