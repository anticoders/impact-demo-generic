Meteor.startup(function() {
  Router.map(function() {

    Panels.Content.widgetBulbs.push({
      title: 'Cover',
      name: 'w:cover',
      url: '/content/cover',
      icon: 'desktop',
    });

    this.route('cover_dashboard', {
      path: '/content/cover',
      template: 'cover_dashboard',
      controller: Widgets.Cover.dashboardController,
    });

  });
});


