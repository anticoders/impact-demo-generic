// In your server code: define a method that the client can call
Meteor.methods({
  sendNewsletterEmail: function (params) {

    // params = {newsletter: newsletter_id, title: "...", content: ..., when: ...}

    Modules.Newsletter.Emails
      .insert({
        title:   params.title,
        content: params.content,
        sent:    true,
        sentAt:  params.when || moment().valueOf()  
      });

    var emails = Modules.Newsletter.Subscribers
      .find({newsletters: params.newsletter})
      .map(function (each) { return each.email; });

    this.unblock();

    emails.forEach(function (email) {

      Email.send({
        to: email,
        from: Modules.Newsletter.from,
        subject: params.title,
        text: params.content
      });
      
    });

  }
});