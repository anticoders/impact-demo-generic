Template.newsletter_subscriber_list.subscribers = function() {
  return Modules.Newsletter.Subscribers.find({}, {
    sort: {createdAt: -1}
  });
};
