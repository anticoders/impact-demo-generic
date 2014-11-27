
Template.panelsLayout.helpers({
  cover: function() {
    return Widgets.Settings.findOne('cover');
  },

});


Template.panelsLayout.rendered = function() {
  $('body').get()[0].className = 'panelsLayout-body';
};


Template.panelsLayout.destroyed = function() {
  $('body').get()[0].className = '';
};



