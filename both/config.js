// console.log("CONFIG");
// console.log("MODULES", Modules);
// console.log("MOB", Modules.Blog);
// console.log("M", M);

Modules.Blog.init({
  name:   'articles',
  title:  'Articles',
  path:   '/articles',
  views: {
    list: {
      layout: 'panels',
    },
    show: {
      layout: 'panels',
      path: '/article',
    }
  }
});

Modules.Blog.init({
  name:   'news',
  title:  'News',
  path:   '/news',
});


Router.map(function() {

  this.route('home', {
    path: '/',
    action: function() {
      Router.go(M.news.nameFor('list'));
    },
  });

});

