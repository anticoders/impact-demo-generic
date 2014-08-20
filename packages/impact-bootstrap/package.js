Package.describe({
  summary: "Impact (alpha)"
});

Package.on_use(function (api, where) {
  
  var client = 'client';

  api.use([
    'accounts-base',
    'deps',
    'fake',
    'handlebars',
    'iron-router',
    'moment',
    'templating',
    'timestamp',
    'underscore',
    'unimark',
  ], client);

  api.use('less', ['client', 'server']);

  api.use('impact', client);

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
    

    
  ], client);

});
