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

  'click .name': function () {
    NewsletterHelpers.changeField(
      Modules.Newsletter.Newsletters,
      this._id, 
      'name',
      "the newsletter " + this.name)
  }

};