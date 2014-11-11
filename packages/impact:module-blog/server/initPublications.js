Modules.Blog.init.publications = function(m, params) {


/*
  TODO:
  For all articles, publish only the title and summary.
*/
  
  Meteor.publish(m.nameFor('article'), function(_id) {
    return m.Articles.find({_id: _id});
  });

  Meteor.publish(m.nameFor('articles'), function() {
    return m.Articles.find({published: true});
  });

  Meteor.publish(m.nameFor('allArticles'), function() {
    return m.Articles.find({});
  });


};

