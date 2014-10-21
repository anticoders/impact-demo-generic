Template.newsletter_modalSubscribedNewsletters.helpers({

  // I don't know how to pass subscriberId below ("click .fa-remove")
  'newslettersEnriched': function () {
    var subscriberId = this._id;
    return Modules.Newsletter.Subscribers.findOne(subscriberId).newsletters
      .map(function (each) {
        var newsletter = Modules.Newsletter.Newsletters.findOne(each);
        newsletter = newsletter || {name: "(not existing)"};  // removable, but my current data is bad
        return {
          subscriberId: subscriberId,
          newsletterId: each,
          newsletterName: newsletter.name
        };
    });
  },

});

Template.newsletter_modalSubscribedNewsletters.events = {

  "click .fa-remove" : function () {

    var text = "Do you really want to delete this subscription?";
    var newsletterId = this.newsletterId;
    var subscriberId = this.subscriberId;

    AntiModals.confirm(text, function (error, result) {
      if (!!result) {
        Modules.Newsletter.Subscribers
          .update(subscriberId, {$pull: {newsletters: newsletterId}});
      }
    });

  }

};
