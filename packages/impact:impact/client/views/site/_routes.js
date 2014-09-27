
Router.map(function () {


  // Home //============================================================

  Panels.Site.homeBulbs.push({
    title: 'Site Settings', name: 'home', url: '/site', icon: 'cog'
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


  // User List //============================================================

  Panels.Site.theBulbs.push({
    title: 'Users', name: 'users', url: '/site/users', icon: 'users'
  });

  this.route('site_users', {
    path: '/site/users',
    template: 'site_users',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: 'Site',
      bulb: 'users',
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



