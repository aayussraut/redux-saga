const initialState = {
  blogs: [],
  loading: false,
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BLOG_ASYNC_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_BLOG_ASYNC_SUCCESS":
      return {
        ...state,
        loading: false,
        blogs: action.payload,
      };
    case "FETCH_BLOG_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "ADD_BLOG_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "ADD_BLOG_SUCCESS":
      return {
        ...state,
        loading: false,
        blogs: [...state.blogs, action.payload],
      };
    case "ADD_BLOG_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default blogReducer;
