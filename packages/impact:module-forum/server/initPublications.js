Modules.Forum.init.publications = function(m, params) {


/*
  TODO:
  For all articles, publish only the title and summary.
*/
  
  Meteor.publish(m.nameFor('topic'), function(_id) {
    return m.Topics.find({_id: _id});
  });

  Meteor.publish(m.nameFor('topics'), function() {
    return m.Topics.find({published: true});
  });

  Meteor.publish(m.nameFor('allTopics'), function() {
    return m.Topics.find({});
  });
  
  Meteor.publish(m.nameFor('post'), function(_id) {
    return m.Posts.find({_id: _id});
  });

  Meteor.publish(m.nameFor('posts'), function() {
    return m.Posts.find({published: true});
  });

  Meteor.publish(m.nameFor('allPosts'), function() {
    return m.Posts.find({});
  });


};

