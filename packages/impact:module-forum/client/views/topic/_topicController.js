Modules.Forum.controllers.topic = function(m, params) {
  return Impact.controllers.contentController.extend({
          
    waitOn: function() {
      return Meteor.subscribe(m.nameFor('posts'), this.params._id);
    },

    data: function() {
      
      var topic = m.Topics.findOne(this.params._id);

      console.log(this.params);
      
      var posts = m.Posts.find({topic_id: topic._id}).fetch();
      
      return {
        impact: {
          bulbs: 'Content',
          bulb: m.nameFor(),
        },
        m: m,
        topic: topic,
        posts: posts,
      };
    },

  });
};

