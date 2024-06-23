const _ = require("lodash");

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return {};
  }

  const mostLikes = blogs.reduce((prev, curr) => {
    return prev && prev.likes > curr.likes ? prev : curr;
  });

  const { title, author, likes } = mostLikes;

  return { title, author, likes };
};

const mostBlogs = (blogs) => {
  const authors = _.map(blogs, "author");
  const authorsSorted = _.values(_.groupBy(authors)).map((i) => ({
    author: i[0],
    blogs: i.length,
  }));

  return authorsSorted[authorsSorted.length - 1];
};

const mostLikes = (blogs) => {
  const sorted = _(blogs)
    .groupBy("author")
    .map((obj, key) => ({
      author: key,
      likes: _.sumBy(obj, "likes"),
    }))
    .sortBy("likes")
    .value();

  return sorted[sorted.length - 1];
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
