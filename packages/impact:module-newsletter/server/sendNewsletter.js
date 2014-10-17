// In your server code: define a method that the client can call
Meteor.methods({
  sendNewsletterEmail: function (params) {

    // params = {newsletter: newsletter_id, title: "...", content: ...}

    this.unblock();

    var emails = Modules.Newsletter.Subscribers
      .find({newsletters: params.newsletter})
      .map(function (each) { return each.email; });

    emails.forEach(function (email) {

      console.log("Email '" + params.title + "' sent to " + email);

      Email.send({
        to: email,
        from: Modules.Newsletter.from,
        subject: params.title,
        text: params.content
      });
      
    });

  }
});