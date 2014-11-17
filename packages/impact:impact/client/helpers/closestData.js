Template.closestData = function(key) {
  var i = 0;
  var data = Template.parentData(i);
  while(data) {
    if(data.hasOwnProperty(key)) return data;
    i++;
    data = Template.parentData(i);
  }
  return null;
};

Template.currentModule = function() {
  var data = Template.closestData('m');
  if(data && data.m) return data.m;
  return null;
};



