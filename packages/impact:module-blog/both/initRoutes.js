Modules.Blog.init.routes = function(m, params) {
  Router.map(function () {

    // USER ROUTES //============================================================

    this.route(m.nameFor('list'), {
      path: params.views.list.path,
      template: 'blog_list',
      layoutTemplate: params.views.list.layout + 'Layout',
      controller: Modules.Blog.controllers.list,
    });

    this.route(m.nameFor('article'), {
      path: params.views.show.path + '/:seo/:_id',
      template: 'blog_article',
      layoutTemplate: params.views.show.layout + 'Layout',
      controller: Modules.Blog.controllers.article,
    });


    // ADMIN ROUTES //============================================================

    Panels.Content.moduleBulbs.push({
      title: params.title,
      name: m.nameFor(),
      url: '/content' + params.path,
      icon: 'th-list',

      subbulbs: [{
        title: 'List articles',
        name: 'list',
        url: '/content' + params.path,
      }, {
        title: 'New article',
        name: 'new',
        url: '/content' + params.path + '/new',
      }],
    });



    this.route(m.nameFor('index'), {
      path: '/content' + params.path,
      template: 'blog_dashboard',
      controller: Modules.Blog.controllers.index(m, params),
    });

    this.route(m.nameFor('new'), {
      path: '/content' + params.path + '/new',
      controller: Modules.Blog.controllers.new(m, params),
    });

    this.route(m.nameFor('edit'), {
      path: '/content' + params.path + '/edit/:_id',
      template: 'blog_edit',
      controller: Modules.Blog.controllers.edit(m, params),
    });


  });
};


