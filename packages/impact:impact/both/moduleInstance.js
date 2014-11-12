Impact.ModuleInstance = function(module, params) {
  _.extend(this, params);
};


_.extend(Impact.ModuleInstance.prototype, {

  nameFor: function(key) {
    return 'm_' + this.name + (key ? ('_' + key) : '');
  },

  clientController: function(key, params) {
    if(!Meteor.isClient) return;
    return Modules[this.type].controllers[key](this, params);
  },

});


