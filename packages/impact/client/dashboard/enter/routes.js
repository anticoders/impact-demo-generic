
Router.map(function () {

  this.route('enter_login', {
    path: '/enter',
    template: 'enter_login',
    layoutTemplate: 'enterLayout',
  });

  this.route('enter_forgot', {
    path: '/enter/forgot/:token',
    template: 'enter_forgot',
    layoutTemplate: 'enterLayout',
  });

  this.route('enter_invited', {
    path: '/enter/invited/:token',
    template: 'enter_invited',
    layoutTemplate: 'enterLayout',
  });

  this.route('enter_initialize', {
    path: '/enter/initialize',
    template: 'enter_initialize',
    layoutTemplate: 'enterLayout',
  });


});


