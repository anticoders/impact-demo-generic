/*
  TODO:
  Merge with subscription channels to take advantage of the waitOn param.
*/

Modules.Blog.init = function(params) {

  M[params.name] = {};

  var m = M[params.name];

  Modules.blog.init.db(m, params);
  Modules.blog.init.views(m, params);
  Modules.blog.init.content(m, params);


  /*
    Example params
    name:   'blog'
    path:   '/blog'
    layout: 'panels'

    views: {
      article: {
        path:
        layout:
      }
      list: {
        path:
        layout:
      }
    }
  */


  // params = _.extend({
  //   name: 'blog',
  //   path: '/blog',
  //   articlePath: '/blog/article',
  // }, params);

  // params.name = 'blog';

  /*
    Notice: to have it fully loadable (allow to load several instances of the same module
    with different names), we need the following things:

    - Field inside db marking to which module the document belongs,
    - Pass module name to all templates as data, and
    - Use the module name in an updated `path_for` helper.

  */

  

};
