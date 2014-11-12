Modules.Forum.init.publications = function(m, params) {
  
  Meteor.publish('m:' + m.name + '-topic', function(_id) {
    console.log(_id);
    console.log(m.Topics.find().fetch());
    return m.Topics.find({_id: _id});
  });
  
}