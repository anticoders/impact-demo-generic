Modules.Forum.init.content = function(m, params) {

  var bulbName = 'm:' + params.name;

  Panels.Content.moduleBulbs.push({
    title: params.title,
    name: bulbName,
    url: '/content' + params.path,
    icon: 'th-list',
  });

  Router.map(function() {

    this.route(params.name + '_index', {
      path: '/content' + params.path,
      template: 'forum_dashboard',
      layoutTemplate: 'adminLayout',

      data: function() {
        return {
          impact: {
            bulbs: 'Content',
            bulb: bulbName,
          },
          m: m,
        };
      },
    });

    this.route(params.name + '_new', {
      
    });

    this.route(params.name + '_edit', {
    });
  });
};


