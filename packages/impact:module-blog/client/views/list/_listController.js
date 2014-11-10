Modules.Blog.controllers.list = function(m, params) {
  return RouteController.extend({
    
    onBeforeAction: function() {
      this.subscribe('m:' + m.name + '-articles');
    },

    data: function() {
      console.log("LIST DATA :::");
      return {
        m: m,
        articles: m.Articles.find({published: true}),
      };
    },

  });
};

