//////////////////////////////////
/**/Meteor.startup(function(){/**/
//////////////////////////////////

if(!process.env.FAKE) return;

if(Modules.Newsletter.Newsletters.findOne({})) {
  console.log("_NOT_ FAKING MODULE: NEWSLETTER (there are entries!)");
  return;
}

console.log("FAKING MODULE: NEWSLETTER");

_.times(5, function() {
  Modules.Newsletter.Newsletters.insert({
    name: Fake.word(),

    createdAt: moment().valueOf(),
    updatedAt: moment().valueOf(),
  });
});

var newsletter_ids = Modules.Newsletter.Newsletters
  .find({})
  .fetch()
  .map(function (each) { return each._id; });

var counts_distribution = [1, 1, 1, 1, 2, 2, 3, 4];

_.times(40, function() {

  var fakeUser = Fake.user();
  Modules.Newsletter.Subscribers.insert({
    name: fakeUser.fullname,
    email: fakeUser.email,
    newsletters: _.sample(newsletter_ids, _.sample(counts_distribution)),

    createdAt: moment().valueOf(),
    updatedAt: moment().valueOf(),
  });
});
  
// QUESTION:
// Aren't we duplicating dates from observe.js?

//////////////////////////////////
/*************************/});/**/
//////////////////////////////////

