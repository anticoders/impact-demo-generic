Impact.ModuleInstance = function(module, params) {
  _.extend(this, params);
};


_.extend(Impact.ModuleInstance.prototype, {

  makeFullName: function(key) {
    return 'm_' + this.name + '_' + key;
  },


});


