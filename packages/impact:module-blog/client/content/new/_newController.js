Modules.Blog.controllers.new = function(m, params) {
  return RouteController.extend({


        action: function() {
        var _id = m.Articles.insert({published: false});
        location.replace(Router.path(m.name + '_edit', {_id: _id}));
      },
      // data: function() {
      //   return {
      //     impact: {
      //       bulbs: 'Content',
      //       bulb: bulbName,
      //       subbulb: 'new',
      //     },
      //     m: m,
      //   };
      // },
    });
};

