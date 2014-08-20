Template.enter_initialize.events({

  'click #enter_button': function(e, t) {
    var email = $(t.find('#enter_email')).val();
    var password = $(t.find('#enter_password')).val();
    var resultField =  $(t.find('#enter_result'));

    resultField.html('Creating user...');

    Meteor.call('impactUsersInitialize', email, function(error, result) {
      if(error || !result) {
        resultField.html('An error occured.');
        console.log('ERROR', error, result);
        return;
      }
      if(!result.success) {
        resultField.html('Failed: ' + result.reason);
        console.log('ERROR', error, result);
        return; 
      }
      Meteor.loginWithPassword(email, result.password, function(error) {
        if(error) {
          resultField.html('An error occured: could not sign in.');
          console.log('ERROR', error, result);
          return;
        }

        Accounts.changePassword(result.password, password, function(error) {
          if(error) {
            resultField.html('An error occured: could not set the password.');
            console.log('ERROR', error, result);
            return;
          }
          resultField.html('Success.');
        });
      });
    });

  },
});


