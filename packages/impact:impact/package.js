Package.describe({
  summary:  'Impact (alpha)',
  version:  '0.1.0',
  name:     'impact:impact',
});

Package.on_use(function (api, where) {

  api.versionsFrom('0.9.0');

  api.use([
    'standard-app-packages',
    'less',
    'accounts-base',
    'accounts-password',
    'accounts-ui',

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
    'accounts-ui',

    'iron:router@0.9.0',

    'mrt:moment@2.8.1',
    'mrt:timestamp@0.1.1',
    'anti:fake@0.4.1',
    // 'anti:mark@0.6.0',
  ]);

  api.add_files([
    'both/index.js',
    'both/model.js',
  ], ['client', 'server']);

  api.add_files([

    'client/utils/dateHelpers.js',
    'client/utils/user.html',
    'client/utils/admin.html',

    'client/dashboard/layout/_.lessimport',
    'client/dashboard/layout/adminLayout.html',
    'client/dashboard/layout/adminLayout.js',
    'client/dashboard/layout/adminHeader.less',
    'client/dashboard/layout/adminLayout.less',
    'client/dashboard/layout/adminMenu.less',
    'client/dashboard/layout/adminTable.less',

    'client/dashboard/layout/enterLayout.html',
    'client/dashboard/layout/enterLayout.js',
    'client/dashboard/layout/enterLayout.less',


    'client/dashboard/content/views/home.html',
    'client/dashboard/content/views/home.js',
    'client/dashboard/content/routes.js',

    'client/dashboard/enter/forgot.html',
    'client/dashboard/enter/forgot.js',
    'client/dashboard/enter/initialize.html',
    'client/dashboard/enter/initialize.js',
    'client/dashboard/enter/invited.html',
    'client/dashboard/enter/invited.js',
    'client/dashboard/enter/login.html',
    'client/dashboard/enter/login.js',
    'client/dashboard/enter/routes.js',
    
    'client/dashboard/profile/views/home.html',
    'client/dashboard/profile/views/password.html',
    'client/dashboard/profile/routes.js',

    'client/dashboard/users/views/invite.html',
    'client/dashboard/users/views/list.html',
    'client/dashboard/users/views/settings.html',
    'client/dashboard/users/routes.js',

    'client/index/index.html',
    'client/index/subscribe.js',
  ], 'client');

  api.add_files([
    'server/greet.js',

    'server/users/setup.js',
    'server/users/publish.js',
    'server/users/initialize.js',
    'server/users/fakeData.js',

    'server/widgets/publish.js',
  ], 'server');


  api.add_files([
    'public/files/impact128.png',
  ], ['client', 'server']);

  api.export(['App', 'Modules', 'Widgets', 'Media', 'Panels']);
});
