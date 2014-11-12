Package.describe({
  summary:  'Impact (alpha)',
  name:     'impact:module-newsletter',
  version:  '0.1.0',
  git: " \* Fill me in! *\ "
});

Package.on_use(function (api, where) {


// email
// tsega:bootstrap3-datetimepicker

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
    'client/helpers/changeFieldModal.js',
    'client/dashboard/newsletterList.html',
    'client/dashboard/newsletterList.js',
    'client/dashboard/subscriberList.html',
    'client/dashboard/subscriberList.js',
    'client/dashboard/addNewsletter.html',
    'client/dashboard/addNewsletter.js',
    'client/dashboard/addSubscriber.html',
    'client/dashboard/addSubscriber.js',
    'client/dashboard/sendEmail.html',
    'client/dashboard/sendEmail.js',
    'client/dashboard/emailList.html',
    'client/dashboard/emailList.js',
    'client/dashboard/modalSubscribedNewsletters.html',
    'client/dashboard/modalSubscribedNewsletters.js',
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
