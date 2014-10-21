var copy = function(source, target, prefix) {
  _.each(source, function(value, key) {
    if(_.isObject(value) && !_.isArray(value) && !_.isFunction(value)) {
      copy(value, target, prefix + key + '.');
    } else {
      target[prefix + key] = value;
    }
  });
};


Impact.utils.makeShallow = function(object) {
  var result = {};
  copy(object, result, '');
  return result;
};

