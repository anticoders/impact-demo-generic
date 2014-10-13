/*
  name          // string

  createdAt     // moment
  updatedAt     // moment
*/
Modules.Newsletter.Newsletters = new Meteor.Collection('newsletter_newsletters');
Modules.Newsletter.Newsletters.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 100
  },
  createdAt: {
    type: Date,
    label: "createdAt",
    optional: true
  },
  updatedAt: {
    type: Date,
    label: "updatedAt",
    optional: true
  },
}));

/*
  name          // string
  email         // string
  newsletters   // array of ObjectId [Newsletters]

  createdAt     // moment
  updatedAt     // moment
*/
Modules.Newsletter.Subscribers = new Meteor.Collection('newsletter_subscribers', {});


