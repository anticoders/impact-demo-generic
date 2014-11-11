//////////////////////////////////
/**/Meteor.startup(function(){/**/
//////////////////////////////////

if(!process.env.FAKE) return;
if(Meteor.users.find({}).count() > 1) return;

console.log("FAKING USERS");

var uid = Accounts.createUser({
  username: 'admin',
  email: 'admin@admin',
  password: 'password',
  profile: {},
});

Meteor.users.update(uid, {$set: {
  admin: true,
}});

Accounts.createUser({
  username: 'user',
  email: 'user@user',
  password: 'password',
  profile: {},
});

_.times(5, function() {
  var fu = Fake.user();
  // console.log(fu);
  Accounts.createUser({
    username: fu.fullname.toLowerCase().replace(/\W/g, ''),
    email: fu.email,
    password: 'password',
    profile: {},
  });
});


//////////////////////////////////
/*************************/});/**/
//////////////////////////////////


