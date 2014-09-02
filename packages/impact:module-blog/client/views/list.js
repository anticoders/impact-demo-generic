

/* TODO: unimark instad of markdown */
/* TODO: move this data helper to the configurable router. */
/* TODO: clever pagination based on querystring. */
Template.blog_list.articles = function() {
  return Modules.Blog.Articles.find({
    published: true
  }, {
    sort: {createdAt: -1}
  });
};



