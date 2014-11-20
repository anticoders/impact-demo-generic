Modules.Newsletter.controllers.edit = function(m, params) {
  return Impact.controllers.contentController.extend({
    
    waitOn: function() {
      return Meteor.subscribe(m.nameFor('emails'), this.params._id);
    },

    data: function() {
      return {
        impact: {
          bulbs: 'Content',
          bulb: m.nameFor(),
        },
        m: m,
        email: m.Emails.findOne(this.params._id),
      };
    },

  });
};