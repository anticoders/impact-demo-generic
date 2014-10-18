Template.newsletter_sendEmail.rendered = function () {
    $('.datetimepicker').datetimepicker({
      language: 'en'
    });
}


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
    var when = !!$('#inputWhen input').val() && $('#inputWhen').data("DateTimePicker").getDate()._d;

    if (!content.length) return;

   var emailId = Modules.Newsletter.Emails
      .insert({
        title:   title,
        content: content,
        sent:    false,
        sentAt:  when || moment().valueOf()  
      });

    if (when === false) {
      Meteor.call('sendNewsletterEmail', emailId,
                  function (error, result) { if (result) { console.log("Email sent"); } });
      AntiModals.alert("Email sent!");
    } else {
      // it will be sent in its time
      AntiModals.alert("Email scheduled to be sent!");
    }

    $('#inputTitle').val("");
    $('#inputContent').val("");
    $('#inputWhen input').val("");

    

  }
};