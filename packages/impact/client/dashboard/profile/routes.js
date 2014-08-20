
Router.map(function () {

  this.route('profile_home', {
    path: '/profile',
    template: 'profile_home',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: Panels.Profile.bulbs,
      bulb: 'home',
    }},
  });

  Panels.Profile.theBulbs.push({
    title: 'Password', name: 'password', url: '/profile/password', icon: 'gear'
  });

  this.route('profile_password', {
    path: '/profile/password',
    template: 'profile_password',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: Panels.Profile.bulbs,
      bulb: 'password',
    }},
  });
});
