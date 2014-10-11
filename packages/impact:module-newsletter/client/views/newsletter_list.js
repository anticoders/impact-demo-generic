Template.newsletter_newsletter_list.helpers({

  'newsletters': function () {
    return Modules.Newsletter.Newsletters
      .find({}, {sort: {createdAt: -1}})
      .map(function (each, index) {
        each.index = index + 1;  // human-readable index, starting from
        return each;
      });
  },

  'subscriberCount': function (newsletter_id) {
    return Modules.Newsletter.Subscribers
             .find({newsletters: newsletter_id})
             .count();
  },

});