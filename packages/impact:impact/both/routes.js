Router.map(function() {

  Panels.Content.homeBulbs.push({
    title: 'Site Content', name: 'home', url: '/content', icon: 'home'
  });


  this.route('content_home', {
    path: '/content',
    template: 'content_home',
    controller: Impact.controllers.contentHomeController,
  });


  this.route('impact_home', {
    path: '/impact',
    template: 'impact_home',
    layoutTemplate: 'adminLayout',
  });

});





