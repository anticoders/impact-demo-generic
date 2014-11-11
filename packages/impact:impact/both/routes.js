var ic = Impact.controllers;


Meteor.startup(function() {
  
  Router.map(function() {

    this.route('impact_home',   {path: '/impact',     template: 'impact_home',  controller: ic.impact.homeController,});

    Panels.Content.homeBulbs.push({title: 'Site Content', name: 'home', url: '/content', icon: 'home'});
    this.route('content_home',  {path: '/content',    template: 'content_home', controller: ic.content.homeController,});

    Panels.Site.homeBulbs.push({  title: 'Site Settings', name: 'home',     url: '/site',         icon: 'cog'   });
    Panels.Site.theBulbs.push({   title: 'Users',         name: 'users',    url: '/site/users',   icon: 'users' });
    Panels.Site.theBulbs.push({   title: 'Invite',        name: 'invite',   url: '/site/invite',  icon: 'plus'  });
    this.route('site_home',     {path: '/site',         template: 'site_home',    controller: ic.site.homeController,});
    this.route('site_users',    {path: '/site/users',   template: 'site_users',   controller: ic.site.usersController,});
    this.route('site_invite',   {path: '/site/invite',  template: 'site_invite',  controller: ic.site.inviteController,});


    Panels.User.homeBulbs.push({  title: 'User Profile',      name: 'home',     url: '/user',         icon: 'user' });
    Panels.User.theBulbs.push({   title: 'Appearance',        name: 'profile',  url: '/user/profile', icon: 'user'});
    Panels.User.theBulbs.push({   title: 'Account Settings',  name: 'account',  url: '/user/account', icon: 'gear'});

    this.route('user_home',     {path: '/user',         template: 'user_home',    controller: ic.user.homeController,});
    this.route('user_profile',  {path: '/user/profile', template: 'user_profile', controller: ic.user.profileController,});
    this.route('user_account',  {path: '/user/account', template: 'user_account', controller: ic.user.accountController,});

  });

});



