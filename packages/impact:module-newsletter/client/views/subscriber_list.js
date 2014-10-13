Template.newsletter_subscriber_list.helpers({

  'subscribers': function () {
    return Modules.Newsletter.Subscribers
        .find({}, {sort: {updatedAt: -1}})
        .map(function (each, index) {
          each.index = index + 1;  // human-readable index, starting from 1
          return each;
        });
  },

  'length': function (arr) {
    return arr.length;
  },

});

