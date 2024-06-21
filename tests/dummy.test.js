const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");

test("dummy returns one", () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  assert.strictEqual(result, 1);
});

describe("total likes", () => {
  const listWithOneBlog = [
    {
      id: "5",
      likes: 5,
    },
  ];

  const listWithMoreBlogs = [
    {
      id: "1",
      likes: 1,
    },
    {
      id: "2",
      likes: 2,
    },
    {
      id: "3",
      likes: 3,
    },
    {
      id: "4",
      likes: 4,
    },
  ];

  test("of an empty list is zero", () => {
    const result = listHelper.totalLikes([]);
    assert.strictEqual(result, 0);
  });

  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    assert.strictEqual(result, 5);
  });
  test("of a bigger list is calculated right", () => {
    const result = listHelper.totalLikes(listWithMoreBlogs);
    assert.strictEqual(result, 10);
  });
});
