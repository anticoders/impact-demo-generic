
Router.map(function () {

  // Home //============================================================

  Panels.Content.homeBulbs.push({
    title: 'Dashboard', name: 'home', url: '/user', icon: 'home'
  });


  this.route('content_home', {
    path: '/content',
    template: 'content_home',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: Panels.Content.bulbs,
      bulb: 'home',
    }},
  });


});



