Modules.Forum.init.routes = function(m, params) {
  
  Panels.Content.moduleBulbs.push({
    title: params.title,
    name: m.nameFor(),
    url: '/content' + params.path,
    icon: 'th-list',
  });

  Router.map(function() {
    
    this.route(m.nameFor('topic'), {
      path: '/content' + params.path + '/topic/:_id',
      template: 'forum_topic',
      controller: m.clientController('topic', params),
    });

    // ADMIN ROUTES //============================================================
    
    this.route(m.nameFor('index'), {
      path: '/content' + params.path,
      template: 'forum_dashboard',
      controller: m.clientController('index', params),
    });

    this.route(m.nameFor('new'), {
      path: '/content' + params.path + '/new',
      controller: m.clientController('new', params),
    });

    this.route(m.nameFor('edit'), {
      path: '/content' + params.path + '/edit/:_id',
      template: 'forum_edit',
      controller: m.clientController('edit', params),
    });
  });
};


