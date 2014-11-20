var randomLine = function() {
  return Fake.sentence();
};

var randomValue = function(max) {
  return Math.floor((Math.random() * 100) + 1);
};

var randomText = function(n) {
  var result = '';
  _.times(n, function() {
    result += Fake.paragraph();
    result += '\n\n\n\n';
  });
  return result;
};

Modules.Forum.init.fake = function(m, params) {

  if(!process.env.FAKE) return;
  if(m.Topics.findOne({})) return;
  
  console.log('FAKING DATA FOR MODULE: ' + m.name);

  _.times(1, function() {
    
    var topic_id = m.Topics.insert({
      author:     randomLine(),
      title:      randomLine(),
      published:  true,
    });

    _.times(randomValue(100), function() {
      m.Posts.insert({
        author:   randomLine(),
        content:  randomText(1),
        published: true,
        topic_id: topic_id,
      });
    });
    
    var cursor = m.Posts.find({topic_id: topic_id}, {fields: {_id:1}}).fetch();
    var posts = _.pluck(cursor,'_id');
    m.Topics.update(topic_id, {$set:{posts: posts}});
    
  });

};