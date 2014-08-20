Meteor.methods({

  'impactUsersInitialize': function(email) {
    if(Meteor.users.findOne()) {
      return {
        success: 'false',
        reason: 'An user already exists.',
      };
    }

    var password = Random.hexString(32);

    /* TODO: check on errors here. */
    /* TODO: randomize the password - use fake? */
    var uid = Accounts.createUser({
      email: email,
      password: password,
      profile: {},
    });

    Meteor.users.update(uid, {$set: {
      admin: true,
    }});

    return {
      success: true,
      password: password,
    };
  },

});


