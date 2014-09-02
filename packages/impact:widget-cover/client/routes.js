
Router.map(function () {

  Panels.Content.widgetBulbs.push({
    title: 'Cover',
    name: 'w:cover',
    url: '/content/cover',
    icon: 'desktop',
  });

  this.route('cover_dashboard', {
    path: '/content/cover',
    template: 'cover_dashboard',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: Panels.Content.bulbs,
      bulb: 'w:cover',
    }},
    // before: function() {Session.set('bulb', 'cover');},
    // unload: function() {Session.set('bulb', undefined);},
  });

  /* 
    TODO: give this a nice centered layout.
    TODO: expand and style login buttons.
  */
  // this.route('login', {
  //   path: '/login',
  //   template: 'login',
  //   // layoutTemplate: 'adminLayout',
  //   // before: function() {Session.set('bulb', 'home');},
  //   // unload: function() {Session.set('bulb', undefined);},
  // });



});



