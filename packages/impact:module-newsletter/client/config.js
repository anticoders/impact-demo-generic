
Modules.Newsletter.load = function(params) {

  params = _.extend({
    name: 'newsletter',
    path: '/newsletter',
  }, params);


  Panels.Content.moduleBulbs.push({
    title: 'Newsletter',
    name: 'm:newsletter',
    url: '/content' + params.path,
    icon: 'flask',
  });

  Router.map(function() {

    if(params.home) {
      this.route('home', {
        path: '/',
        template: 'newsletter_newsletter',
        layoutTemplate: params.layoutTemplate,
      });
    }

    // USER ROUTES //============================================================

    this.route(params.name + '_newsletter', {
      path: params.path,
      template: 'newsletter_newsletter',
      layoutTemplate: params.layoutTemplate,
    });

    // ADMIN ROUTES //============================================================

    this.route(params.name + '_dashboard', {
      path: '/content' + params.path,
      template: 'newsletter_dashboard',
      layoutTemplate: 'adminLayout',
      data: {impact: {
        bulbs: 'Content',
        bulb: 'm:newsletter',
      }},
    });

  });

};



