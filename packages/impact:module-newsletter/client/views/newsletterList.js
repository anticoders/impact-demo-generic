Template.newsletter_newsletterList.helpers({

  'newsletters': function () {
    return Modules.Newsletter.Newsletters
      .find({}, {sort: {createdAt: -1}})
      .map(function (each, index) {
        each.index = index + 1;  // human-readable index, starting from
        return each;
      });
  },

  'subscriberCount': function (newsletterId) {
    return Modules.Newsletter.Subscribers
             .find({newsletters: newsletterId})
             .count();
  },

});

Template.newsletter_newsletterList.events = {

  //"click .fa.envelope-o" via link/routing

  "click .fa-remove" : function () {

    var text = "Do you really want to delete newsletter " + this.name + "?";
    var newsletterId = this._id;

    AntiModals.confirm(text, function (error, result) {
      console.log(result);
      if (!!result) {
        Meteor.call("removeNewsletter", newsletterId, function (error, result) {  });
      }
    });

  },

  'click .name': function(e, t) {
    var that = this;
    AntiModals.prompt({
      title:    'Update',
      message:  "Change name of the newsletter " + that.name + " to:" ,
      ok:       'Change',
      cancel:   'Cancel',
      closer:   true,
    }, function (error, result) {
      if (!!result && !!result.value) {
        Modules.Newsletter.Newsletters.update(
          that._id, {
            $set: {name: result.value}
        });
      }
    });
  },

};