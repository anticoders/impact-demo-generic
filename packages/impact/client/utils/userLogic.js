

Handlebars.registerHelper('admin', function(options) {
  if(Meteor.user() && Meteor.user().admin) return options.fn(this);
  return options.inverse(this);
});

Handlebars.registerHelper('user', function(options){
  if(Meteor.userId()) return options.fn(this);
  return options.inverse(this);
});



