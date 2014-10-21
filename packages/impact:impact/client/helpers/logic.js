_.extend(Helpers, {

  equals: function(a, b) {
    return a == b;
  },

  activeIf: function(a, b, active) {
    if(a == b) {
      if(typeof active === 'string') return active;
      return 'active';
    }
    return '';
  },

});



