/*
  TODO:
  Merge with subscription channels to take advantage of the waitOn param.
*/

Modules.Blog.load = function(params) {

  params = _.extend({
    name: 'blog',
    path: '/blog',
    articlePath: '/blog/article',
  }, params);

  params.name = 'blog';

  /*
    Notice: to have it fully loadable (allow to load several instances of the same module
    with different names), we need the following things:

    - Field inside db marking to which module the document belongs,
    - Pass module name to all templates as data, and
    - Use the module name in an updated `path_for` helper.

  */

  Panels.Content.moduleBulbs.push({
    title: 'Blog',
    name: 'm:blog',
    url: '/content' + params.path,
    icon: 'th-list',
  });

  Router.map(function () {

    /*
      Todo: instead, create a separate file for managing home path and redirect it to a given path.
    */
    /*
      Todo: layout names should be taken from config;
    */

    if(params.home) {
      this.route('home', {
        path: '/',
        template: 'blog_list',
        layoutTemplate: 'panelsLayout',
      });
    }

    this.route(params.name + '_list', {
      path: params.path,
      template: 'blog_list',
      layoutTemplate: 'panelsLayout',
    });

    this.route(params.name + '_dashboard', {
      path: '/content' + params.path,
      template: 'blog_dashboard',
      layoutTemplate: 'adminLayout',
      data: {impact: {
        bulbs: Panels.Content.bulbs,
        bulb: 'm:blog',
      }},
    });

    this.route(params.name + '_new', {
      path: params.path + '/edit',
      action: function() {
        var _id = Modules.Blog.Articles.insert({});
        _.defer(function() {
          Router.go('blog_edit', {_id: _id});
        });
      },
      // template: 'blog_edit',
      // layoutTemplate: 'zen',
      // data: function() { return {
      //   create: true,
      // };},
    });

    this.route(params.name + '_edit', {
      path: params.path + '/edit/:_id',
      template: 'blog_edit',
      layoutTemplate: 'zenLayout',
      data: function() {
        return {
          article: Modules.Blog.Articles.findOne({_id: this.params._id}),
        };
      },
    });

    this.route(params.name + '_article', {
      path: params.articlePath + '/:seo/:_id',
      template: 'blog_article',
      layoutTemplate: 'panelsLayout',
      yieldTemplates: {
        'blog_articleToEdit': {to: 'top'},
      },
      data: function() { return {
        article: Modules.Blog.Articles.findOne(this.params._id),
      };},
    });


  });


};
