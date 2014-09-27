
Template.introLayout.rendered = function() {
  $('body').get()[0].className = 'introLayout-body';
};

Template.introLayout.destroyed = function() {
  $('body').get()[0].className = '';
};


