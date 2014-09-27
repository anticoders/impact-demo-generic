
Router.map(function () {


  // Home //============================================================

  Panels.Site.homeBulbs.push({
    title: 'Home', name: 'home', url: '/site', icon: 'home'
  });


  this.route('site_home', {
    path: '/site',
    template: 'site_home',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: 'Site',
      bulb: 'home',
    }},
  });

  // User Settings //============================================================

  Panels.Site.theBulbs.push({
    title: 'Settings', name: 'settings', url: '/users/settings', icon: 'gear'
  });

  this.route('site_usersSettings', {
    path: '/site/settings',
    template: 'users_settings',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: 'Site',
      bulb: 'settings',
    }},
  });

  // User List //============================================================

  Panels.Site.theBulbs.push({
    title: 'Users', name: 'users', url: '/site/users', icon: 'users'
  });

  this.route('users_list', {
    path: '/users/list',
    template: 'users_list',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: 'Site',
      bulb: 'list',
    }},
  });

  // Invite Users //============================================================

  Panels.Site.theBulbs.push({
    title: 'Invite', name: 'invite', url: '/site/invite', icon: 'plus'
  });

  this.route('site_invite', {
    path: '/site/invite',
    template: 'site_invite',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: 'Site',
      bulb: 'invite',
    }},
  });

});



