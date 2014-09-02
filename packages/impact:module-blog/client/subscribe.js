
Deps.autorun(function(){
  Meteor.subscribe('blog_articles');
});

Deps.autorun(function(){
  Meteor.subscribe('blog_unpublished');
});

