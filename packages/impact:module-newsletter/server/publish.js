//////////////////////////////////
/**/Meteor.startup(function(){/**/
//////////////////////////////////


Meteor.publish("newsletter_newsletters", function() {
  return Modules.Newsletter.Newsletters.find({});
});


Meteor.publish("newsletter_subscribers", function() {
  return Modules.Newsletter.Subscribers.find({});
});


Meteor.publish("newsletter_emails", function() {
  return Modules.Newsletter.Emails.find({});
});


//// If we want to restrict to admin:
//
// var user = Meteor.users.findOne(this.userId);
// if( (!!user) && user.admin ) ...


//////////////////////////////////
/*************************/});/**/
//////////////////////////////////

