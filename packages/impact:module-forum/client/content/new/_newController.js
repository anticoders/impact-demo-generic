Modules.Forum.controllers.new = function(m, params) {
  return Impact.controllers.contentController.extend({

    // TODO: Do not insert it immediately?

    action: function() {
      var _id = m.Topics.insert({
        published: false,
      });

      location.replace(
        Router.path(m.nameFor('edit'), {_id: _id})
      );
    },

  });
};

