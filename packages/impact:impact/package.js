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

    'client/helpers/dateHelpers.js',
    'client/helpers/user.html',
    'client/helpers/admin.html',

    'client/layouts/_.lessimport',
    'client/layouts/admin/adminLayout.html',
    'client/layouts/admin/adminLayout.js',
    'client/layouts/admin/adminHeader.less',
    'client/layouts/admin/adminLayout.less',
    'client/layouts/admin/adminMenu.less',
    'client/layouts/admin/adminTable.less',

    'client/layouts/enter/enterLayout.html',
    'client/layouts/enter/enterLayout.js',
    'client/layouts/enter/enterLayout.less',

    'client/layouts/intro/introLayout.html',
    'client/layouts/intro/introLayout.js',
    'client/layouts/intro/introLayout.less',


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
    
    'client/views/profile/home.html',
    'client/views/profile/password.html',
    'client/views/profile/_routes.js',

    'client/views/users/invite.html',
    'client/views/users/list.html',
    'client/views/users/settings.html',
    'client/views/users/_routes.js',

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
