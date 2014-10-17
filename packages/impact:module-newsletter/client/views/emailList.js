Template.newsletter_emailList.helpers({

  'emails': function () {
    return Modules.Newsletter.Emails
      .find({}, {sort: {updatedAt: -1}})
      .map(function (each, index, all) {
        each.index = all.count() - index;  // human-readable index, starting from
        return each;
      });
  },

  'length': function (arr) {
    return arr.length;
  },

});

Template.newsletter_emailList.events = {

  "click .fa-edit" : function () {
    alert("TO DO");
  },

  "click .fa-remove" : function () {

    var text = "Do you really want to delete email " + this.title + "?";
    var emailId = this._id;

    AntiModals.confirm(text, function (error, result) {

      if (!!result) {
        Modules.Newsletter.Emails.remove(emailId);
      }

    });

  }

};