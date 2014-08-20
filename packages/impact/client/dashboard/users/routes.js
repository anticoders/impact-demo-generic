
Router.map(function () {

  this.route('users_home', {
    path: '/users',
    template: 'users_home',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: Panels.Users.bulbs,
      bulb: 'home',
    }},
  });

  Panels.Users.theBulbs.push({
    title: 'Settings', name: 'settings', url: '/users/settings', icon: 'gear'
  });

  this.route('users_settings', {
    path: '/users/settings',
    template: 'users_settings',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: Panels.Users.bulbs,
      bulb: 'settings',
    }},
  });

  Panels.Users.theBulbs.push({
    title: 'List', name: 'list', url: '/users/list', icon: 'users'
  });

  this.route('users_list', {
    path: '/users/list',
    template: 'users_list',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: Panels.Users.bulbs,
      bulb: 'list',
    }},
  });

  Panels.Users.theBulbs.push({
    title: 'Invite', name: 'invite', url: '/users/invite', icon: 'plus'
  });

  this.route('users_invite', {
    path: '/users/invite',
    template: 'users_invite',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: Panels.Users.bulbs,
      bulb: 'invite',
    }},
  });

});



