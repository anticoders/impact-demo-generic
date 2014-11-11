Impact.ModuleInstance = function(module, params) {
  _.extend(this, params);
};


_.extend(Impact.ModuleInstance.prototype, {

  nameFor: function(key) {
    return 'm_' + this.name + (key ? ('_' + key) : '');
  },


});


