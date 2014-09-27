
Router.map(function () {

  // Home //============================================================

  Panels.Content.homeBulbs.push({
    title: 'Site Content', name: 'home', url: '/content', icon: 'home'
  });


  this.route('content_home', {
    path: '/content',
    template: 'content_home',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: 'Content',
      bulb: 'home',
    }},
  });


});



