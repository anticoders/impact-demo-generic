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


/*
  title         // string
  content       // string
  newsletter    // aObjectId [Newsletters]
  sent:         // Boolean

  sentAt        // moment
  createdAt     // moment
  updatedAt     // moment
*/
Modules.Newsletter.Emails = new Meteor.Collection('newsletter_emails', {});