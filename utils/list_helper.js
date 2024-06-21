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

  console.log("THE MOST LIKED BLOG: ", { title, author, likes });

  return { title, author, likes };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
