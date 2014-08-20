//////////////////////////////////
/**/Meteor.startup(function(){/**/
//////////////////////////////////

if(!process.env.FAKE) return;
if(Meteor.users.find({}).count() > 1) return;

console.log("FAKING USERS");

var uid = Accounts.createUser({
  email: 'admin@admin',
  password: 'password',
  profile: {},
});

Meteor.users.update(uid, {$set: {
  admin: true,
}});

Accounts.createUser({
  email: 'user@user',
  password: 'password',
  profile: {},
});

_.times(5, function() {
  Accounts.createUser({
    email: Fake.user().email,
    password: 'password',
    profile: {},
  });
});


//////////////////////////////////
/*************************/});/**/
//////////////////////////////////


