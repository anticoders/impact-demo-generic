Template.newsletter_addSubscriber.helpers({

  'newsletters': function () {
    return Template.currentModule().Newsletters
      .find({}, {sort: {name: 1}});
  },

});

Template.newsletter_addSubscriber.events = {

  "click #submit" : function () {

    var name = $('#inputName').val();
    var email = $('#inputEmail').val();
    var newsletter = $('#inputNewsletter').val();

    if (!email.length) return;

    var subscriber = Template.currentModule().Subscribers
      .findOne({email: email});

    if (subscriber === undefined) {
      // new subscribers
      Template.currentModule().Subscribers.insert({
        name: name,
        email: email,
        newsletters: [newsletter],

        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf(),
        // or server-side to make dates consistent?
      });
    } else {
      // existing subscribers

      Template.currentModule().Subscribers.update({
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
