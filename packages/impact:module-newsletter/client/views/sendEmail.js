Template.newsletter_sendEmail.helpers({

  'name': function () {

    console.log(this);
    
    return this.name;

  },

});

Template.newsletter_sendEmail.events = {

  "click #submit" : function () {

    var title = $('#inputTitle').val();
    var content = $('#inputContent').val();

    if (!content.length) return;

    console.log({title: title, content: content, newsletter: this.newsletter._id});

    Meteor.call('sendNewsletterEmail',
                {title: title, content: content, newsletter: this.newsletter._id},
                function (error, result) { if (result) { console.log("Email sent"); } });

    $('#inputTitle').val("");
    $('#inputContent').val("");
    
    // some confirmation

  }
};
