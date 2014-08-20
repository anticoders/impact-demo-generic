//////////////////////////////////
/**/Meteor.startup(function(){/**/
//////////////////////////////////

Modules.Blog.Articles.find({}).observeChanges({
  added: function(id, fields) {
    Meteor.setTimeout(function() {
      var item = Modules.Blog.Articles.findOne(id);
      if(!item.createdAt) {
        Modules.Blog.Articles.update(id, {$set: {createdAt: new Date().getTime()}});
      }
    }, 1);
  },

  changed: function(id, changes) {
    if(_.size(changes) === 1) {

      if(changes.updatedAt || changes.createdAt || changes.publishedAt) return;
      if(changes.published) {
        Meteor.setTimeout(function() {
          var item = Modules.Blog.Articles.findOne(id);
          if(!item.publishedAt) {
            Modules.Blog.Articles.update(id, {$set: {publishedAt: new Date().getTime()}});
          }
        }, 1);
        return;
      }

      Meteor.setTimeout(function() {
        Modules.Blog.Articles.update(id, {$set: {updatedAt: new Date().getTime()}});
      }, 1);

    } else {
      Meteor.setTimeout(function() {
        Modules.Blog.Articles.update(id, {$set: {updatedAt: new Date().getTime()}});
      }, 1);
    }
  },
});

//////////////////////////////////
/*************************/});/**/
//////////////////////////////////

