import { connect } from "react-redux";
import { fetchBlogAsync, addBlogAsync } from "../redux/actions/blogAction";
import { useEffect, useRef } from "react";

const Blogs = (props) => {
  useEffect(() => {
    props.fetchBlogAsync();
  }, []);
  const titleRef = useRef(null);
  const despRef = useRef(null);

  const handleAdd = () => {
    props.addBlogAsync({
      id: props.blogs.length + 1,
      title: titleRef.current.value,
      body: despRef.current.value,
    });
    titleRef.current.value = "";
    despRef.current.value = "";
  };
  return (
    <>
      {console.log(props)}
      {props.loading && <h1>loading...</h1>}
      <input type="text" ref={titleRef} placeholder="Enter title" /> <br />
      <input type="text" ref={despRef} placeholder="Enter description" /> <br />
      <button onClick={handleAdd}>Add Data </button>
      {props.blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.blog.loading,
    blogs: state.blog.blogs,
  };
};

export default connect(mapStateToProps, { fetchBlogAsync, addBlogAsync })(
  Blogs
);
