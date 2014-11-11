Modules.Blog.controllers.edit = function(m, params) {
  return Impact.controllers.contentController.extend({
    
      waitOn: function() {
        return Meteor.subscribe(m.nameFor('article'), this.params._id);
      },

      data: function() {
        return {
          impact: {
            bulbs: 'Content',
            bulb: bulbName,
          },
          m: m,
          article: m.Articles.findOne({_id: this.params._id}),
        };
      },

  });
};

