Modules.Forum.controllers.index = function(m, params) {
  return Impact.controllers.contentController.extend({
    
    waitOn: function() {
      return Meteor.subscribe(m.nameFor('allTopics'));
    },

    data: function() {
      
      return {
        impact: {
          bulbs: 'Content',
          bulb: m.nameFor(),
          subbulb: 'list',
        },
        m: m,
        topics: m.Topics.find({}),
      };
    },

  });
};

