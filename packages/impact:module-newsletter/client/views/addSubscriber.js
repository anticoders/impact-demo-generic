Template.newsletter_addSubscriber.helpers({

  'newsletters': function () {
    return Modules.Newsletter.Newsletters
      .find({}, {sort: {name: 1}});
  },

});

Template.newsletter_addSubscriber.events = {

  "click #submit" : function () {

    var name = $('#inputName').val();
    var email = $('#inputEmail').val();
    var newsletter = $('#inputNewsletter').val();

    if (!email.length) return;

    var subscriber = Modules.Newsletter.Subscribers
      .findOne({email: email});

    if (subscriber === undefined) {
      // new subscribers
      Modules.Newsletter.Subscribers.insert({
        name: name,
        email: email,
        newsletters: [newsletter],

        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf(),
        // or server-side to make dates consistent?
      });
    } else {
      // existing subscribers

      Modules.Newsletter.Subscribers.update({
        _id: subscriber._id
      }, {
        $set: {updatedAt: moment().valueOf()},
        $addToSet: {newsletters: newsletter}
      });

    }

    $('#inputName').val("");
    $('#inputEmail').val("");
    
  }
};
