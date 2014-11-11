Modules.Blog.controllers.list = function(m, params) {
  return RouteController.extend({
    
    waitOn: function() {
      return Meteor.subscribe(m.nameFor('articles'));
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

