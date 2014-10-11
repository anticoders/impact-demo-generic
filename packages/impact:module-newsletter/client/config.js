
Modules.Newsletter.load = function(params) {

  params = _.extend({
    name: 'newsletter',
    path: '/newsletter',
  }, params);


  Panels.Content.moduleBulbs.push({
    title: 'Newsletter',
    name: 'm:newsletter',
    url: '/content' + params.path,
    icon: 'paperclip',
    subbulbs: [{
      title: 'List newsletters',
      name: 'newsletters',
      url: '/content' + params.path,
    }, {
      title: 'List subscribers',
      name: 'subscribers',
      url: '/content' + params.path + '/subscribers',
    }],
  });

  Router.map(function() {

    if(params.home) {
      this.route('home', {
        path: '/',
        template: 'newsletter_newsletter_list',
        layoutTemplate: 'panelsLayout',
      });
    }

    // USER ROUTES //============================================================

    // this.route(params.name + '_newsletter_list', {
    //   path: params.path,
    //   template: 'newsletter_newsletter_list',
    //   layoutTemplate: 'panelsLayout',
    // });

    // this.route(params.name + '_subscriber_list', {
    //   path: params.path,
    //   template: 'newsletter_subscriber_list',
    //   layoutTemplate: 'panelsLayout',
    // });

    // ADMIN ROUTES //============================================================

    this.route(params.name + '_dashboard', {
      path: '/content' + params.path,
      template: 'newsletter_newsletter_list',
      layoutTemplate: 'adminLayout',
      data: {impact: {
        bulbs: 'Content',
        bulb: 'm:newsletter',
        subbulb: 'newsletters',
      }},
    });

    this.route(params.name + '_subscriber_dashboard', {
      path: '/content' + params.path + '/subscribers',
      template: 'newsletter_subscriber_list',
      layoutTemplate: 'adminLayout',
      data: {impact: {
        bulbs: 'Content',
        bulb: 'm:newsletter',
        subbulb: 'subscribers',
      }},
    });

  });

};



