Package.describe({
  summary:  'Impact (alpha)',
  name:     'impact:theme-basic',
  version:  '0.1.0',
});

Package.onUse(function (api, where) {
  
  
  api.use([
    'impact:impact',
    'impact:theme-layouts',
    'impact:theme-semantic',
  ], ['client', 'server']);

  api.imply([
    'impact:impact',
    'impact:theme-layouts',
    'impact:theme-semantic',
  ], ['client', 'server']);


  //-- IMPACT: FILES --//

});
