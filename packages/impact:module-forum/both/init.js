Modules.Forum.init = function(params) {
  
    // Ensure all params are filled
  // ================================================================================
  params.views      = params.views || {};
  params.views.show = params.views.show || {};
  params.views.list = params.views.list || {};

  params = {
    name:         params.name || 'forum',
    title:        params.title || 'Forum',
    path:         params.path || '/forum',
    layout:       params.layout || 'panels',
  };


  // Create instance
  // ================================================================================

  M[params.name] = {
    type: 'Forum',
    name: params.name,
    title: params.title,
    params: params,
  };

  var m = M[params.name];


  // Run initialization
  // ================================================================================

  Modules.Forum.init.db(m, params);
//  Modules.Forum.init.views(m, params);
  Modules.Forum.init.content(m, params);

  if(Meteor.isServer) {
    Modules.Forum.init.publications(m, params);
    Modules.Forum.init.privileges(m, params);
  }

  if(Meteor.isClient) {

  }
}
