Modules.Forum.controllers.edit = function(m, params) {
  return Impact.controllers.contentController.extend({
    
    waitOn: function() {
      return Meteor.subscribe(m.nameFor('topic'), this.params._id);
    },

    data: function() {
      return {
        impact: {
          bulbs: 'Content',
          bulb: m.nameFor(),
          subbulb: 'list',
        },
        m: m,
        topic: m.Topics.findOne({_id: this.params._id}),
        collection: "M." + m.name + ".Topics"
      };
    },

  });
};

