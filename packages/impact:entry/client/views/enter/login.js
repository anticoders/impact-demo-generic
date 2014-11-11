Template.enter_login.events({

  'click #enter_logout': function() {
    Meteor.logout();
  },

  'click #enter_login': function(e, t) {
    Meteor.loginWithPassword(
      $(t.find('#enter_email')).val(),
      $(t.find('#enter_password')).val()
    );
  },

  'click #enter_create': function() {

  },

  'click #enter_forgot': function() {

  },

});

