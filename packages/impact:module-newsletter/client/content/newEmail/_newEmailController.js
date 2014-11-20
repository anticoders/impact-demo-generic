Modules.Newsletter.controllers.new = function(m, params) {
  return Impact.controllers.contentController.extend({

    action: function() {
      var _id = m.Articles.insert({
        newsletter: this.params._id,
        sent: false,
      });

      location.replace(
        Router.path(m.nameFor('edit'), {_id: _id})
      );
    },

  });
};
