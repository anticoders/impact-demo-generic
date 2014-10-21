Modules.Blog.init.views = function(m, params) {

  Router.map(function () {

    // USER ROUTES //============================================================

    this.route(m.name + '_list', {
      path: params.views.list.path,
      template: 'blog_list',
      layoutTemplate: params.views.list.layout + 'Layout',

      onBeforeAction: function() {
        this.subscribe('m:' + m.name + '-articles');
      },

      data: function() {
        return {
          m: m,
          articles: m.Articles.find({published: true}),
        };
      },
    });

    this.route(m.name + '_article', {
      path: params.views.show.path + '/:seo/:_id',
      template: 'blog_article',
      layoutTemplate: params.views.show.layout + 'Layout',
      // yieldTemplates: {
      //   'blog_articleToEdit': {to: 'top'},
      // },
      
      onBeforeAction: function() {
        this.subscribe('m:' + m.name + '-article', this.params._id);
      },

      data: function() {
        return {
          m: m,
          article: m.Articles.findOne(this.params._id),
        };
      },
    });


    // ADMIN ROUTES //============================================================

   


    // this.route(params.name + '_new', {
    //   path: params.path + '/edit',
    //   action: function() {
    //     var _id = Modules.Blog.Articles.insert({});
    //     _.defer(function() {
    //       Router.go('blog_edit', {_id: _id});
    //     });
    //   },
    //   // template: 'blog_edit',
    //   // layoutTemplate: 'zen',
    //   // data: function() { return {
    //   //   create: true,
    //   // };},
    // });

    // this.route(params.name + '_edit', {
    //   path: params.path + '/edit/:_id',
    //   template: 'blog_edit',
    //   layoutTemplate: 'zenLayout',
    //   data: function() {
    //     return {
    //       article: Modules.Blog.Articles.findOne({_id: this.params._id}),
    //     };
    //   },
    // });




  });


};


