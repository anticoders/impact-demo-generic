Template.newsletter_newsletter_list.helpers({

  'newsletters': function () {
    return Modules.Newsletter.Newsletters.find({}, {
      sort: {createdAt: -1}
    });
  },

  'subscriberCount': function (newsletter_id) {
    return Modules.Newsletter.Subscribers
             .find({newsletters: newsletter_id})
             .count();
  },

});