
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
    }, {
      title: 'Send newsletter',
      name: 'send',
      url: '/content' + params.path + '/send',
    }],
  });

  Router.map(function() {

    if(params.home) {
      this.route('home', {
        path: '/',
        template: 'newsletter_newsletterList',
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
      template: 'newsletter_newsletterList',
      layoutTemplate: 'adminLayout',
      data: {impact: {
        bulbs: 'Content',
        bulb: 'm:newsletter',
        subbulb: 'newsletters',
      }},
    });

    this.route(params.name + '_subscriber_dashboard', {
      path: '/content' + params.path + '/subscribers',
      template: 'newsletter_subscriberList',
      layoutTemplate: 'adminLayout',
      data: {impact: {
        bulbs: 'Content',
        bulb: 'm:newsletter',
        subbulb: 'subscribers',
      }},
    });

    this.route(params.name + '_send_dashboard', {
      path: '/content' + params.path + '/send',
      template: 'newsletter_sendEmail',
      layoutTemplate: 'adminLayout',
      data: {impact: {
        bulbs: 'Content',
        bulb: 'm:newsletter',
        subbulb: 'send',
      }},
    });

  });

};



