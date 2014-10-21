
/*
  title         // string
  seo           // string
  summary       // markdown
  content       // unimark
  published     // boolean

  createdAt     // moment
  publishedAt   // moment
  updatedAt     // moment
*/


Modules.Blog.init.db = function(m, params) {
  m.Articles = new Meteor.Collection(params.name + '_articles');
};


// Modules.Blog.Articles = new Meteor.Collection('blog_articles', {
  
  // transform: function(article) {
  //   article.seo = Utils.clean(article.title);
  //   return article;
  // },

// });

