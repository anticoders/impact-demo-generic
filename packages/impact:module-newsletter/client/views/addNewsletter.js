Template.newsletter_addNewsletter.events = {

  "click #submit" : function () {

    var name = $('#name').val();

    if (name.length) {

      Modules.Newsletter.Newsletters.insert({
        name:      name,
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf(),
      });
      // or server-side to make dates consistent?

      $('#name').val("");
      
    }
    
  }
};