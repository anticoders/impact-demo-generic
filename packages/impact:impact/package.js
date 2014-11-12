
// THIS FILE WAS AUTO-GENERATED BY IMPACT.
// DO NOT MODIFY THIS FILE!
// Write to package.impact.js instead.

Package.describe({
  summary:  'Impact (alpha)',
  version:  '0.1.0',
  name:     'impact:impact',
});

Package.onUse(function (api, where) {

  api.versionsFrom('0.9.3.1');

  api.use([
    'standard-app-packages',
    'less',
    'accounts-base',
    'accounts-password',
    'showdown',

    'iron:router@1.0.0',

    'mrt:moment@2.8.1',
    // 'mrt:timestamp@0.1.1',
    'anti:fake@0.4.1',
    'anti:entry@0.2.0-impact',

    'aldeed:collection2@2.2.0',
    'aldeed:simple-schema@1.0.3',
    'aldeed:autoform@4.0.0-rc6',
    // 'anti:mark@0.6.0',
  ], ['client', 'server']);

  api.imply([
    'standard-app-packages',
    'less',
    'accounts-base',
    'accounts-password',
    'showdown',

    'iron:router',

    'mrt:moment',
    // 'mrt:timestamp@0.1.1',
    'anti:fake',
    'anti:entry',
    // 'anti:mark@0.6.0',

    'aldeed:collection2',
    'aldeed:simple-schema',
    'aldeed:autoform',
  ]);

  //-- IMPACT: FILES --//

  api.addFiles([
    "both/lib/index.js",
    "both/utils/makeShallow.js",
    "both/model.js",
    "both/moduleInstance.js",
    "both/routeControllers.js",
    "both/routes.js",
  ], ["client", "server"]);


  api.addFiles([
    "client/layouts/admin/adminLayout.js",
    "client/layouts/enter/enterLayout.js",
    "client/layouts/intro/introLayout.js",
    "client/layouts/user/userLayout.js",
    "client/views/content/_homeController.js",
    "client/views/content/home.js",
    "client/views/impact/_homeController.js",
    "client/views/impact/home.js",
    "client/views/site/_homeController.js",
    "client/views/site/_inviteController.js",
    "client/views/site/_usersController.js",
    "client/views/user/_accountController.js",
    "client/views/user/_homeController.js",
    "client/views/user/_profileController.js",
    "client/helpers/_helpers.js",
    "client/helpers/closestData.js",
    "client/helpers/date.js",
    "client/helpers/logic.js",
    "client/helpers/mPathFor.js",
    "client/index/subscribe.js",
    "client/layouts/admin/adminHeader.less",
    "client/layouts/admin/adminLayout.less",
    "client/layouts/admin/adminMenu.less",
    "client/layouts/admin/adminTable.less",
    "client/layouts/enter/enterLayout.less",
    "client/layouts/intro/introLayout.less",
    "client/layouts/user/userLayout.less",
    "client/layouts/_.lessimport",
    "client/layouts/index.less",
    "client/layouts/admin/adminLayout.html",
    "client/layouts/enter/enterLayout.html",
    "client/layouts/intro/introLayout.html",
    "client/layouts/user/userLayout.html",
    "client/views/content/home.html",
    "client/views/impact/home.html",
    "client/views/site/home.html",
    "client/views/site/invite.html",
    "client/views/site/users.html",
    "client/views/user/account.html",
    "client/views/user/home.html",
    "client/views/user/profile.html",
    "client/index/index.html",
  ], "client");


  api.addFiles([
    "server/greet.js",
    "server/widgets.js",
  ], "server");


  api.addFiles([
    "files/impact128.png",
  ], "client");


  api.export(['App', 'Modules', 'Widgets', 'Media', 'Panels', 'Impact', 'M', 'Helpers']);
});
