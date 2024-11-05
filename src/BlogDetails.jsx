import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    const {
      data: blog,
      error,
      isPending,
    } = useFetch("http://localhost:5001/blogs/" + id);

    const navigate = useNavigate();

    const handleDelete = () => {
      if (blog && blog.id) {
        fetch(`http://localhost:5001/blogs/${blog.id}`, {
          method: "DELETE",
        })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.error("Error deleting blog:", err);
          });
      }
    }
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails