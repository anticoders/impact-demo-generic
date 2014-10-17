Template.newsletter_subscriberList.helpers({

  'subscribers': function () {
    return Modules.Newsletter.Subscribers
        .find({}, {sort: {createdAt: -1}})  // updatedAt gets crazy eg with newsletter removal
        .map(function (each, index) {
          each.index = index + 1;  // human-readable index, starting from 1
          return each;
        });
  },

  'length': function (arr) {
    return arr.length;
  },

});

Template.newsletter_subscriberList.events = {

  "click .fa-edit" : function () {
    alert("There will be modal for editing. :)");
  },

  "click .fa-remove" : function () {

    var text = "Do you really want to delete subscriber " + this.email + "?";
    var subscriberId = this._id;

    AntiModals.confirm(text, function (error, result) {
      if (!!result) {
        Modules.Newsletter.Subscribers
          .remove({_id: subscriberId});
      }
    });

  }

};
