//////////////////////////////////
/**/Meteor.startup(function(){/**/
//////////////////////////////////

Modules.Newsletter.Newsletters.allow({
  insert: function(userId, items) {
    var user = Meteor.users.findOne(userId);
    return (!!user) && user.admin;
  },
  update: function(userId, items, fields, modifier) {
    var user = Meteor.users.findOne(userId);
    return (!!user) && user.admin;
  },
  remove: function(userId, items) {
    var user = Meteor.users.findOne(userId);
    return (!!user) && user.admin;
  }
});

Modules.Newsletter.Subscribers.allow({
  insert: function(userId, items) {
    var user = Meteor.users.findOne(userId);
    return (!!user) && user.admin;
  },
  update: function(userId, items, fields, modifier) {
    var user = Meteor.users.findOne(userId);
    return (!!user) && user.admin;
  },
  remove: function(userId, items) {
    var user = Meteor.users.findOne(userId);
    return (!!user) && user.admin;
  }
});

//////////////////////////////////
/*************************/});/**/
//////////////////////////////////
