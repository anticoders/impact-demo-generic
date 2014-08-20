

Template.zenLayout.rendered = function() {
  $('body').get()[0].className = 'zenLayout-body';
};

Template.zenLayout.destroyed = function() {
  $('body').get()[0].className = '';
};


