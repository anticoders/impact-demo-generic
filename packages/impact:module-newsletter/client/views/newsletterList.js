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

  "click .fa-edit" : function () {
    alert("There will be modal for editing. :)");
  },

  "click .fa-remove" : function () {
    // I guess there should be a modal
    Modules.Newsletter.Newsletters
      .remove({_id: this._id});

    // "Uncaught Error: Not permitted. Untrusted code may only update documents by ID. [403]"
    Modules.Newsletter.Subscribers
      .update(
        {newsletters: this._id},
        {$pull: {newsletters: this._id}},
        {multi: true}
      );

  }

};