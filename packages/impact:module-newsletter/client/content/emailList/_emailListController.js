Modules.Newsletter.controllers.emails = function(m, params) {
  return Impact.controllers.contentController.extend({
    
    waitOn: function() {
      return Meteor.subscribe(m.nameFor('emails'));
    },

    data: function() {
      return {
        impact: {
          bulbs: 'Content',
          bulb: m.nameFor(),
        },
        m: m,
      };
    },

  });
};
