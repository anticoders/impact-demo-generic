


_.extend(Helpers, {
  mPathFor: function() {
    var m = Template.closestData('m').m;
    // return Router.helpers.pathFor.call(this, m.nameFor(routeName), options);

    var routeName;
    if (arguments.length > 1) {
      routeName = arguments[0];
      options = arguments[1] || {};
    }
    routeName = m.nameFor(routeName);
    var opts = options && options.hash;
    opts = opts || {};
    var path = '';
    var query = opts.query;
    var hash = opts.hash;
    var routeName = routeName || opts.route;
    var data = _.extend({}, opts.data || this);
    var route = Router.routes[routeName];
    // warn(route, "pathFor couldn't find a route named " + JSON.stringify(routeName));
    if (route) {
      _.each(route.handler.compiledUrl.keys, function (keyConfig) {
      var key = keyConfig.name;
      if (_.has(opts, key)) {
        data[key] = EJSON.clone(opts[key]);
        // so the option doesn't end up on the element as an attribute
        delete opts[key];
      }
      });
      path = route.path(data, {query: query, hash: hash});
    }
    return path;
  },
});

// _.extend(Helpers, {
//   mPathFor: function(options) {
//     var routeName;
//     if (arguments.length > 1) {
//       routeName = arguments[0];
//       options = arguments[1] || {};
//     }

//     var opts = options && options.hash;
//     opts = opts || {};
//     var path = '';
//     var query = opts.query;
//     var hash = opts.hash;
//     var routeName = routeName || opts.route;
//     var data = EJSON.clone(opts.data || this);

//     var m = Template.closestData('m').m;
//     routeName = m.name + '_' + routeName;
//     // console.log("MPF", m, routeName);
//     // console.log("MPF ROUTER", Router);
//     // console.log("MPF ROUTER", Router.routes);
    
    

//     var route = Router.routes[routeName];
//     // warn(route, "pathFor couldn't find a route named " + JSON.stringify(routeName));

//     // console.log("MPF ROUTE", route);
//     if (route) {
//       _.each(route.handler.compiledUrl.keys, function (keyConfig) {
//         var key = keyConfig.name;
//         if (_.has(opts, key)) {
//           data[key] = EJSON.clone(opts[key]);
//           // so the option doesn't end up on the element as an attribute
//           delete opts[key];
//         }
//       });
//       path = route.path(data, {query: query, hash: hash});
//     }
//     return path;
//   },
// });

