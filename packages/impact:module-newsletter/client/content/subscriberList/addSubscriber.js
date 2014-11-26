Template.newsletter_addSubscriber.rendered = function () {
  console.log("This should activate dropdowns...");  // QUESTION: Any idea why it does not work?
  $('.ui.dropdown').dropdown();
};


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
    var newsletterId = $('#inputNewsletter').val();

    if (!email.length) return;

    var subscriber = Template.currentModule().Subscribers
      .findOne({email: email});

    if (subscriber === undefined) {
      // new subscribers
      Template.currentModule().Subscribers.insert({
        name: name,
        email: email,
        newsletters: [{newsletterId: newsletterId}],

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
        $push: {newsletters: {newsletterId: newsletterId}}  // I cannot just $addToSet - so there may be duplicated
      });

    }

    $('#inputName').val("");
    $('#inputEmail').val("");
    
  }
};
