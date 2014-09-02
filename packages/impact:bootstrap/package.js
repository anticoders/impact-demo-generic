Package.describe({
  summary:  'Impact (alpha)',
  name:     'impact:bootstrap',
  version:  '0.1.0',
});

Package.on_use(function (api, where) {
  
  api.use(['impact:impact'], ['client', 'server']);
  api.imply(['impact:impact'], ['client', 'server']);

  api.add_files([
    'bootstrap/css/bootstrap.css',
    'bootstrap/css/bootstrap-theme.css',
    'bootstrap/js/bootstrap.js',
    'bootstrap/addons/content-list-item.css',
    'bootstrap/addons/inline-responsive.css',

    'preamble.lessimport',
    'theme/_/html.less',
    'theme/_/zaddons.less',

    'theme/unimark/uni-code.css',

    'layouts/classic/classic.html',
    'layouts/classic/classic.js',
    
    'layouts/panels/panels.html',
    'layouts/panels/panels.js',
    'layouts/panels/panels.less',
    
    'layouts/zen/zen.html',
    'layouts/zen/zen.js',
    'layouts/zen/zen_.less',
    'layouts/zen/zen_bar.less',
    'layouts/zen/zen_main.less',
    
    'vendor/autogrow.js',
    
  ], 'client');

});
