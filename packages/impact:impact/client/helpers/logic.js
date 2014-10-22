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

  or: function(a, b, c, d, e, f, g, h) {
    return a || b || c || d || e || f || g || h;
  },

});



