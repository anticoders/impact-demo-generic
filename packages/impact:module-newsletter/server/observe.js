//////////////////////////////////
/**/Meteor.startup(function(){/**/
//////////////////////////////////

Modules.Newsletter.Newsletters.find({}).observeChanges({
  added: function(id, fields) {
    Meteor.setTimeout(function() {
      var item = Modules.Newsletter.Newsletters.findOne(id);
      if(!item.createdAt) {
        Modules.Newsletter.Newsletters.update(id, {$set: {createdAt: new Date().getTime()}});
      }
    }, 1);
  },

  changed: function(id, changes) {
    if(_.size(changes) === 1) {
      Meteor.setTimeout(function() {
        Modules.Newsletter.Newsletters.update(id, {$set: {updatedAt: new Date().getTime()}});
      }, 1);
    }
  },
});

Modules.Newsletter.Subscribers.find({}).observeChanges({
  added: function(id, fields) {
    Meteor.setTimeout(function() {
      var item = Modules.Newsletter.Subscribers.findOne(id);
      if(!item.createdAt) {
        Modules.Newsletter.Subscribers.update(id, {$set: {createdAt: new Date().getTime()}});
      }
    }, 1);
  },

  changed: function(id, changes) {
    if(_.size(changes) === 1) {
      Meteor.setTimeout(function() {
        Modules.Newsletter.Subscribers.update(id, {$set: {updatedAt: new Date().getTime()}});
      }, 1);
    }
  },
});

Modules.Newsletter.Emails.find({}).observeChanges({
  added: function(id, fields) {
    Meteor.setTimeout(function() {
      var item = Modules.Newsletter.Emails.findOne(id);
      if(!item.createdAt) {
        Modules.Newsletter.Emails.update(id, {$set: {createdAt: new Date().getTime()}});
      }
    }, 1);
  },

  changed: function(id, changes) {
    if(_.size(changes) === 1) {
      Meteor.setTimeout(function() {
        Modules.Newsletter.Emails.update(id, {$set: {updatedAt: new Date().getTime()}});
      }, 1);
    }
  },
});

//////////////////////////////////
/*************************/});/**/
//////////////////////////////////
