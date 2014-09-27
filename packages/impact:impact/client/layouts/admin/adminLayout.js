

Template.adminLayout.rendered = function() {
  $('body').get()[0].className = 'adminLayout-body';
};

Template.adminLayout.destroyed = function() {
  $('body').get()[0].className = '';
};

Template.adminLayout.helpers({

  parsedBulbs: function(x) {
    if(! Panels[this.impact.bulbs]) {
      console.error('No such bulbs!', this.impact);
      return;
    }
    return Panels[this.impact.bulbs].bulbs;
  },
  
});





