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

var newsletterIds = Modules.Newsletter.Newsletters
  .find({})
  .fetch()
  .map(function (each) { return each._id; });

var counts_distribution = [1, 1, 1, 1, 2, 2, 3, 4];

_.times(40, function() {

  var fakeUser = Fake.user();
  Modules.Newsletter.Subscribers.insert({
    name: fakeUser.fullname,
    email: fakeUser.email,
    newsletters: _.sample(newsletterIds, _.sample(counts_distribution)),

    createdAt: moment().valueOf(),
    updatedAt: moment().valueOf(),
  });
});

_.times(20, function() {

  var sentAt = moment().valueOf() + 1000 * 60 * 60 * 24 * 3 * (Math.random() - 0.5);

  Modules.Newsletter.Emails.insert({
    title:       Fake.sentence(_.sample([2, 2, 3])),
    content:     Fake.sentence(_.sample([20, 40, 60, 100])),
    newsletter:  _.sample(newsletterIds),

    sentAt:    sentAt,
    sent:      sentAt < moment().valueOf(),

    createdAt: moment().valueOf(),
    updatedAt: moment().valueOf(),
  });
});

// QUESTION:
// Aren't we duplicating dates from observe.js?

//////////////////////////////////
/*************************/});/**/
//////////////////////////////////

