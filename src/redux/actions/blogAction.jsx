export function fetchBlogAsync() {
  return {
    type: "FETCH_BLOG_ASYNC_REQUEST",
  };
}

export function addBlogAsync(blog) {
  return {
    type: "ADD_BLOG_REQUEST",
    payload: blog,
  };
}
