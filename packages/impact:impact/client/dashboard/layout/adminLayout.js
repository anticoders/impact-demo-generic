

Template.adminLayout.rendered = function() {
  $('body').get()[0].className = 'adminLayout-body';
};

Template.adminLayout.destroyed = function() {
  $('body').get()[0].className = '';
};

Template.adminLayout.parsedBulbs = function(x) {

  var b = this.impact.bulb;
  _.each(this.impact.bulbs, function(bulbs) {
    _.each(bulbs, function(bulb) {
      console.log('TEST', bulb.name, b);
      bulb.active = bulb.name && (bulb.name === b);
         
    });
  });

  console.log("BU?", this, b);
  return this.impact.bulbs;

};




