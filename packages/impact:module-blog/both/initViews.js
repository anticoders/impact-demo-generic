Modules.Blog.init.views = function(m, params) {

  Router.map(function () {

    // USER ROUTES //============================================================

    this.route(params.name + '_list', {
      path: params.path,
      template: 'blog_list',
      layoutTemplate: 'panelsLayout',
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


