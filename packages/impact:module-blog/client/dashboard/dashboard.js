

Template.blog_dashboard.articles = function() {
  return Modules.Blog.Articles.find({
    // $or: [
      // {published: false},
      // {published: {$exists: false}}
    // ]
  }, {
    sort: {createdAt: -1}
  });
};

Template.blog_dashboard.ensureTitle = function() {
  if(this.title && this.title.length > 0) return this.title;
  return "<UNTITLED>";
};

