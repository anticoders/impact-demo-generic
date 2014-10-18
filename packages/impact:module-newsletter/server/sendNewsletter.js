// In your server code: define a method that the client can call
Meteor.methods({

  sendNewsletterEmail: function (emailId) {

    console.log('sendNewsletterEmail', emailId);

    var emailData = Modules.Newsletter.Emails.findOne(emailId);

    if (emailData.sent) {
      console.log("Already sent.");
      return false;
    }

    Modules.Newsletter.Emails.update(emailId, {
      $set: {sent: true}
    });
    // should I update 'sentAt' as well?

    console.log("email data", emailData);

    var emailAddresses = Modules.Newsletter.Subscribers
      .find({newsletters: emailData.newsletter})
      .map(function (each) { return each.email; });

    this.unblock();

    emailAddresses.forEach(function (email) {

      console.log("sent")

      Email.send({
        to: email,
        from: Modules.Newsletter.from,
        subject: emailData.title,
        text: emailData.content
      });
      
    });

  },

  checkNewslettersForSending: function () {

    var emailToBeSent = Modules.Newsletter.Emails
      .find({
        sent: false,
        sentAt: {$lt: moment().valueOf()}
      });

    console.log("Interval for checking newsletters to be set. Found: " + emailToBeSent.count());

    emailToBeSent.forEach(function (each) {
      Meteor.call('sendNewsletterEmail', each._id);
    });

  }

});


Meteor.startup(function () {

  Meteor.setInterval(function () {
    Meteor.call('checkNewslettersForSending');
  },
    15 * 60 * 1000 // every 15 min
  );

});