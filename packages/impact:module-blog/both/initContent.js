Modules.Blog.init.content = function(m, params) {


  var bulbName = 'm:' + params.name;

  Panels.Content.moduleBulbs.push({
    title: params.title,
    name: bulbName,
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


  Router.map(function() {

    this.route(params.name + '_index', {
      path: '/content' + params.path,
      template: 'blog_dashboard',
      layoutTemplate: 'adminLayout',

      onBeforeAction: function() {
        this.subscribe('m:' + m.name + '-allArticles');
      },

      data: function() {
        return {
          impact: {
            bulbs: 'Content',
            bulb: bulbName,
            subbulb: 'list',
          },
          m: m,
          articles: m.Articles.find({}),
        };
      },
    });

    this.route(params.name + '_new', {
      path: '/content' + params.path + '/new',
      template: 'blog_edit',
      layoutTemplate: 'adminLayout',
      data: function() {
        return {
          impact: {
            bulbs: 'Content',
            bulb: bulbName,
            subbulb: 'new',
          },
          m: m,
        };
      },
    });

    this.route(params.name + '_edit', {
      path: '/content' + params.path + '/edit/:_id',
      template: 'blog_edit',
      layoutTemplate: 'adminLayout',

      onBeforeAction: function() {
        this.subscribe('m:' + m.name + '-article', this.params._id);
      },

      data: function() {
        return {
          impact: {
            bulbs: 'Content',
            bulb: bulbName,
            subbulb: 'new',
          },
          m: m,
          article: m.Articles.findOne({_id: this.params._id}),
        };
      },
    });


  });



};


