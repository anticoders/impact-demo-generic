Modules.Blog.controllers.edit = function(m, params) {
  return RouteController.extend({
    
      onBeforeAction: function() {
        this.subscribe('m:' + m.name + '-article', this.params._id);
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

