//////////////////////////////////
/**/Meteor.startup(function(){/**/
//////////////////////////////////


Widgets.Settings.allow({
  insert: function(userId, items) {
    return false;
  },
  update: function(userId, items, fields, modifier) {
    var user = Meteor.users.findOne(userId);
    return (!!user) && user.admin;
  },
  remove: function(userId, items) {
    return false;
  },
});


Meteor.publish("widgetsSettings", function() {
  return Widgets.Settings.find({});
});





//////////////////////////////////
/*************************/});/**/
//////////////////////////////////

