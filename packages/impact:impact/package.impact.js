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

  api.export(['App', 'Modules', 'Widgets', 'Media', 'Panels', 'Impact', 'M', 'Helpers']);
});
