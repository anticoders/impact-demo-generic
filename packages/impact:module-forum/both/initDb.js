Modules.Forum.init.db = function(m, params) {
  
  m.Posts = new Meteor.Collection(params.name + '_posts');

  m.Posts.attachSchema(new SimpleSchema({
    author:       {type: [Object], minCount: 1, maxCount: 1},
    content:      {type: String, optional: true},
    published:    {type: Boolean},

    createdAt: {
      type: Date,
      autoValue: function() {
        if(this.isInsert) return new Date();
        this.unset();
      },
    },

    updatedAt: {
      type: Date,
      autoValue: function() {
        return new Date();
      },
    },

    publishedAt: {
      type: Date,
      optional: true,
      autoValue: function() {
        if(this.field('published').value && !this.isSet) {
          return new Date();
        }
        this.unset();
      },
    },

  }));
  
  m.Topics = new Meteor.Collection(params.name + '_topics');
  
  m.Topics.attachSchema(new SimpleSchema({
    
    author:       {type: String, optional: true},
    title:        {type: String, optional: true},
    published:    {type: Boolean},
    posts:        {type: [String], minCount: 0, optional: true},

    createdAt: {
      type: Date,
      autoValue: function() {
        if(this.isInsert) return new Date();
        this.unset();
      },
    },

    updatedAt: {
      type: Date,
      autoValue: function() {
        return new Date();
      },
    },

    publishedAt: {
      type: Date,
      optional: true,
      autoValue: function() {
        if(this.field('published').value && !this.isSet) {
          return new Date();
        }
        this.unset();
      },
    },
    
  }));
  
};
