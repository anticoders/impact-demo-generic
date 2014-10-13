/*
  name          // string

  createdAt     // moment
  updatedAt     // moment
*/
Modules.Newsletter.Newsletters = new Meteor.Collection('newsletter_newsletters', {});

/*
  name          // string
  email         // string
  newsletters   // array of ObjectId [Newsletters]

  createdAt     // moment
  updatedAt     // moment
*/
Modules.Newsletter.Subscribers = new Meteor.Collection('newsletter_subscribers', {});


