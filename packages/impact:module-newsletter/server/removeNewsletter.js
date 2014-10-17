// server-side of newsletter removal,
// as multi updates are not allowed on client-side

Meteor.methods({

  removeNewsletter: function (newsletterId) {

    Modules.Newsletter.Newsletters
      .remove({_id: newsletterId});

    Modules.Newsletter.Subscribers
      .update(
        {newsletters: newsletterId},
        {$pull: {newsletters: newsletterId}},
        {multi: true}
      );

    // also remove subscribers with 0 subscriptions?

    return true;

  }

});

