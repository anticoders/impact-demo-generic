Modules.Blog.controllers.article = function(m, params) {
  return RouteController.extend({
    
         // yieldTemplates: {
      //   'blog_articleToEdit': {to: 'top'},
      // },
      
      
     onBeforeAction: function() {
        this.subscribe('m:' + m.name + '-article', this.params._id);
      },

      data: function() {
        return {
          m: m,
          article: m.Articles.findOne(this.params._id),
        };
      },

  });
};

