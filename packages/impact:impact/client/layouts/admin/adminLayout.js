

Template.adminLayout.rendered = function() {
  $('body').get()[0].className = 'adminLayout-body';
};

Template.adminLayout.destroyed = function() {
  $('body').get()[0].className = '';
};

Template.adminLayout.helpers({

  parsedBulbs: function(x) {

    var b = this.impact.bulb;
    var panels = Panels[this.impact.bulbs].bulbs;

    _.each(panels, function(bulbs) {
      _.each(bulbs, function(bulb) {
        bulb.active = bulb.name && (bulb.name === b);
      });
    });


    console.log("BU?", panels);
    return panels;
  },
});





