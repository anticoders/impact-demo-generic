Template.newsletter_sendEmail.helpers({

  'subscriberCount': function () {
    if (!!this.newsletter)
      return Modules.Newsletter.Subscribers
               .find({newsletters: this.newsletter._id})
               .count();
    else
      return "";
  },

});


Template.newsletter_sendEmail.events = {

  "click #submit" : function () {

    var title = $('#inputTitle').val();
    var content = $('#inputContent').val();

    if (!content.length) return;

    Meteor.call('sendNewsletterEmail',
                {title: title, content: content, newsletter: this.newsletter._id},
                function (error, result) { if (result) { console.log("Email sent"); } });

    $('#inputTitle').val("");
    $('#inputContent').val("");

    AntiModals.alert("Email sent!");

  }
};
