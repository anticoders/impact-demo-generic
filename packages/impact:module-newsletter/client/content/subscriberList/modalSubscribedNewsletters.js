Template.newsletter_modalSubscribedNewsletters.helpers({

  'newslettersEnriched': function () {

    var that = this;
    var subscriberId = this.dataSubscriber._id;
    return this.data.m.Subscribers.findOne(subscriberId).newsletters
      .map(function (each) {
        var newsletterId = each.newsletterId;
        var newsletter = that.data.m.Newsletters.findOne(newsletterId);
        newsletter = newsletter || {name: "(not existing)"};  // removable, but my current data is bad
        return {
          subscriberId: subscriberId,
          newsletterId: newsletterId,
          newsletterName: newsletter.name
        };
    });
  },

});


Template.newsletter_modalSubscribedNewsletters.events = {

  "click .fa-remove" : function (e, t) {

    var text = "Do you really want to delete this subscription?";
    var newsletterId = this.newsletterId;
    var subscriberId = this.subscriberId;

    AntiModals.confirm(text, function (error, result) {
      if (!!result) {
        t.data.data.m.Subscribers  // yes, data.data
          .update(subscriberId, {$pull: {newsletters: {newsletterId: newsletterId}}});
      }
    });

  }

};
