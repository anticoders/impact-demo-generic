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
      path: '/content' + params.path + '/new',
      template: 'forum_edit',
      layoutTemplate: 'adminLayout',
      action: function() {
        var _id = m.Topics.insert({published: false});
        window.location.replace(Router.path(m.name + '_edit', {_id: _id}));
      },      
    });

    this.route(params.name + '_edit', {
      path: '/content' + params.path + '/edit/:_id',
      template: 'forum_edit',
      layoutTemplate: 'adminLayout',

      onBeforeAction: function() {
        this.subscribe('m:' + m.name + '-topic', this.params._id);
      },

      data: function() {
        return {
          impact: {
            bulbs: 'Content',
            bulb: bulbName,
          },
          m: m,
          topic: m.Topics.findOne({_id: this.params._id}),
        };
      },
    });
  });
};


