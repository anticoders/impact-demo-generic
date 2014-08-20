
Template.enterLayout.rendered = function() {
  $('body').get()[0].className = 'enterLayout-body';
};

Template.enterLayout.destroyed = function() {
  $('body').get()[0].className = '';
};


