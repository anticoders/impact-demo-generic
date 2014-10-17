Deps.autorun(function(){
  Meteor.subscribe('newsletter_newsletters');
});

Deps.autorun(function(){
  Meteor.subscribe('newsletter_subscribers');
});

Deps.autorun(function(){
  Meteor.subscribe('newsletter_emails');
});
