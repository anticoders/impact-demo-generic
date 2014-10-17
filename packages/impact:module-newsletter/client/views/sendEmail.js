Template.newsletter_sendEmail.helpers({

  'newsletters': function () {
    return Modules.Newsletter.Newsletters
      .find({}, {sort: {name: 1}});
  },

});

Template.newsletter_sendEmail.events = {

  "click #submit" : function () {

    var title = $('#inputTitle').val();
    var content = $('#inputContent').val();
    var newsletter = $('#inputNewsletter').val();

    if (!content.length) return;

    console.log({title: title, content: content, newsletter: newsletter});

    Meteor.call('sendNewsletterEmail',
                {title: title, content: content, newsletter: newsletter},
                function (error, result) { if (result) { console.log("Email sent"); } });

    $('#inputTitle').val("");
    $('#inputContent').val("");
    
  }
};
