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