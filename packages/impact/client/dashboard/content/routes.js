
Router.map(function () {

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



