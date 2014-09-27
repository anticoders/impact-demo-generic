Meteor.startup(function() {

  if(Meteor.users.findOne()) return;


  var uid = Accounts.createUser({
    username: 'hubert',
    email: 'hubert@orlikarnia.com',
    password: 'password',
  });

  Meteor.users.update(uid, {$set: {
    roles: {
      owner: true,
      uberadmin: true,
      admin: true,
      editor: true,
    },
  }});


}); 