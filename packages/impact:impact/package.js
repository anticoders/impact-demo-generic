Package.describe({
  summary:  'Impact (alpha)',
  version:  '0.1.0',
  name:     'impact:impact',
});

Package.onUse(function (api, where) {

  api.versionsFrom('0.9.0');

  api.use([
    'standard-app-packages',
    'less',
    'accounts-base',
    'accounts-password',

    'iron:router@0.9.0',

    'mrt:moment@2.8.1',
    'mrt:timestamp@0.1.1',
    'anti:fake@0.4.1',
    // 'anti:mark@0.6.0',
  ], ['client', 'server']);

  api.imply([
    'standard-app-packages',
    'less',
    'accounts-base',
    'accounts-password',

    'iron:router@0.9.0',

    'mrt:moment@2.8.1',
    'mrt:timestamp@0.1.1',
    'anti:fake@0.4.1',
    // 'anti:mark@0.6.0',
  ]);

  api.addFiles([
    'both/index.js',
    'both/model.js',
  ], ['client', 'server']);

  api.addFiles([

    'client/helpers/dateHelpers.js',
    'client/helpers/logic.js',

    'client/layouts/_.lessimport',
    'client/layouts/index.less',
    'client/layouts/admin/adminLayout.html',
    'client/layouts/admin/adminLayout.js',
    'client/layouts/admin/adminHeader.less',
    'client/layouts/admin/adminLayout.less',
    'client/layouts/admin/adminMenu.less',
    'client/layouts/admin/adminTable.less',

    'client/layouts/enter/enterLayout.html',
    'client/layouts/enter/enterLayout.js',
    'client/layouts/enter/enterLayout.less',

    'client/layouts/user/userLayout.html',
    'client/layouts/user/userLayout.js',
    'client/layouts/user/userLayout.less',


    'client/views/impact/home.html',
    'client/views/impact/home.js',
    'client/views/impact/_routes.js',

    'client/views/content/home.html',
    'client/views/content/home.js',
    'client/views/content/_routes.js',

    'client/views/enter/forgot.html',
    'client/views/enter/forgot.js',
    'client/views/enter/initialize.html',
    'client/views/enter/initialize.js',
    'client/views/enter/invited.html',
    'client/views/enter/invited.js',
    'client/views/enter/login.html',
    'client/views/enter/login.js',
    'client/views/enter/_routes.js',
    
    'client/views/user/home.html',
    'client/views/user/profile.html',
    'client/views/user/account.html',
    'client/views/user/_routes.js',

    'client/views/site/home.html',
    'client/views/site/users.html',
    'client/views/site/invite.html',
    'client/views/site/_routes.js',

    'client/index/index.html',
    'client/index/subscribe.js',
  ], 'client');

  api.addFiles([
    'server/greet.js',

    'server/users/setup.js',
    'server/users/publish.js',
    'server/users/initialize.js',
    'server/users/fakeData.js',

    'server/widgets/publish.js',
  ], 'server');


  api.addFiles([
    'files/impact128.png',
  ], ['client', 'server'], {isAsset: true});

  api.export(['App', 'Modules', 'Widgets', 'Media', 'Panels']);
});
