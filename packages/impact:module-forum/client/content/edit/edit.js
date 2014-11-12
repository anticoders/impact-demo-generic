var schema = new SimpleSchema({

  title:      {type: String, optional: true,},
  author:     {type: String, optional: true,},
  published:  {type: Boolean,},

});

Template.forum_edit.helpers({
  schema: function() {
    return schema;
  },
});
