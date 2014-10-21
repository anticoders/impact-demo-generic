Modules.Blog.init.publications = function(m, params) {
  
  Meteor.publish('m:' + m.name + '-article', function(_id) {
    return m.Articles.find({_id: _id});
  });

  Meteor.publish('m:' + m.name + '-articles', function() {
    return m.Articles.find({published: true});
  });

  Meteor.publish('m:' + m.name + '-allArticles', function() {
    return m.Articles.find({});
  });




/*
  TODO:
  For all articles, publish only the title and summary.
  Create a third channel for publishing the current article.
*/

  // Meteor.publish("blog_articles", function() {
  //   return Modules.Blog.Articles.find({published: true});
  // });


  // Meteor.publish("blog_unpublished", function() {
  //   var user = Meteor.users.findOne(this.userId);
  //   if( (!!user) && user.admin ) {
  //     return Modules.Blog.Articles.find({});
  //   }
  //   return null;
  // });


}