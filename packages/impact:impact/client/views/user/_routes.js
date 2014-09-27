

Router.map(function () {


  
  // Home //============================================================

  Panels.User.homeBulbs.push({
    title: 'User Home', name: 'home', url: '/user', icon: 'home'
  });


  this.route('user_home', {
    path: '/user',
    template: 'user_home',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: 'User',
      bulb: 'home',
    }},
  });


  // Profile //============================================================

  Panels.User.theBulbs.push({
    title: 'Profile', name: 'profile', url: '/user/profile', icon: 'user'
  });

  this.route('user_profile', {
    path: '/user/profile',
    template: 'user_profile',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: 'User',
      bulb: 'profile',
    }},
  });

  // Account //============================================================

  Panels.User.theBulbs.push({
    title: 'Account Settings', name: 'account', url: '/user/account', icon: 'gear'
  });

  this.route('user_account', {
    path: '/user/account',
    template: 'user_account',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: 'User',
      bulb: 'account',
    }},
  });

});




