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

     this.route(params.name + '_dashboard', {
      path: '/content' + params.path,
      template: 'blog_dashboard',
      layoutTemplate: 'adminLayout',
      data: {impact: {
        bulbs: 'Content',
        bulb: bulbName,
        subbulb: 'list',
      }},
    });

    this.route(params.name + '_new', {
      path: '/content' + params.path + '/new',
      template: 'blog_new',
      layoutTemplate: 'adminLayout',
      data: {impact: {
        bulbs: 'Content',
        bulb: bulbName,
        subbulb: 'new',
      }},
    });

    this.route(params.name + '_edit', {
      path: '/content' + params.path + '/edit/:_id',
      template: 'blog_new',
      layoutTemplate: 'adminLayout',
      data: function() {
        return {
          impact: {
            bulbs: 'Content',
            bulb: bulbName,
            subbulb: 'new',
          },
          article: Modules.Blog.Articles.findOne({_id: this.params._id}),
        };
      },
    });


  });



};


