
Modules.Example.load = function(params) {

  params = _.extend({
    name: 'example',
    path: '/example',
  }, params);


  Panels.Content.moduleBulbs.push({
    title: 'Example',
    name: 'm:example',
    url: '/content' + params.path,
    icon: 'th-list',
    subbulbs: [{
      title: 'Fruits',
      name: 'fruits',
      url: '/content' + params.path + '/fruits',
    }, {
      title: 'Stones',
      name: 'stones',
      url: '/content' + params.path + '/stones',
    }],
  });

  Router.map(function() {

    if(params.home) {
      this.route('home', {
        path: '/',
        template: 'example_example',
        layoutTemplate: params.layoutTemplate,
      });
    }

    // USER ROUTES //============================================================

    this.route(params.name + '_example', {
      path: params.path,
      template: 'example_example',
      layoutTemplate: params.layoutTemplate,
    });

    // ADMIN ROUTES //============================================================

    this.route(params.name + '_dashboard', {
      path: '/content' + params.path,
      template: 'example_dashboard',
      layoutTemplate: 'adminLayout',
      data: {impact: {
        bulbs: 'Content',
        bulb: 'm:example',
      }},
    });

    this.route(params.name + '_dashboard', {
      path: '/content' + params.path + '/fruits',
      template: 'example_fruits',
      layoutTemplate: 'adminLayout',
      data: {impact: {
        bulbs: 'Content',
        bulb: 'm:example',
        subbulb: 'fruits',
      }},
    });

    this.route(params.name + '_dashboard', {
      path: '/content' + params.path + '/stones',
      template: 'example_stones',
      layoutTemplate: 'adminLayout',
      data: {impact: {
        bulbs: 'Content',
        bulb: 'm:example',
        subbulb: 'stones',
      }},
    });





  });

};



