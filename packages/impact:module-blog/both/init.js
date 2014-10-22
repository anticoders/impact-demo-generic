/*
  TODO:
  Merge with subscription channels to take advantage of the waitOn param.
*/

Modules.Blog.init = function(params) {


  // Ensure all params are filled
  // ================================================================================
  params.views      = params.views || {};
  params.views.show = params.views.show || {};
  params.views.list = params.views.list || {};

  params = {
    name:         params.name || 'blog',
    title:        params.title || 'Blog',
    path:         params.path || '/blog',
    layout:       params.layout || 'panels',

    views: {
      show: {
        path:     params.views.show.path || params.path + '/article' || '/blog/article',
        layout:   params.views.show.layout || params.layout || 'panels',
      },
      list: {
        path:     params.views.list.path || params.path || '/blog',
        layout:   params.views.list.layout || params.layout || 'panels',
      },
    },
  };


  // Create instance
  // ================================================================================

  M[params.name] = {
    type: 'Blog',
    name: params.name,
    title: params.title,
    params: params,
  };

  var m = M[params.name];


  // Run initialization
  // ================================================================================

  Modules.Blog.init.db(m, params);
  Modules.Blog.init.views(m, params);
  Modules.Blog.init.content(m, params);

  if(Meteor.isServer) {
    Modules.Blog.init.privileges(m, params);
    Modules.Blog.init.publications(m, params);
    Modules.Blog.init.fake(m, params);
  }

  if(Meteor.isClient) {

  }
  

};






