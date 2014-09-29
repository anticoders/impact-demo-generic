
Template.userLayout.rendered = function() {
  $('body').get()[0].className = 'userLayout-body';
};

Template.userLayout.destroyed = function() {
  $('body').get()[0].className = '';
};


