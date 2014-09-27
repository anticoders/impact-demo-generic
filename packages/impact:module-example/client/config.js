
Modules.Example.load = function(params) {

  params = _.extend({
    name: 'example',
    path: '/example',
  }, params);


  Router.map(function() {
    this.route(params.name + '_example', {
      path: params.path,
      template: 'example_example',
      layoutTemplate: params.layoutTemplate,
    });
  });

};



