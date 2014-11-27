Package.describe({
  summary:  'Impact (alpha)',
  name:     'impact:bootstrap',
  version:  '0.1.0',
});

Package.on_use(function (api, where) {
  
  api.use(['impact:impact'], ['client', 'server']);
  api.imply(['impact:impact'], ['client', 'server']);

  //-- IMPACT: FILES --//

});
