import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState('akmal')
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};

    setIsPending(true);

    fetch("http://localhost:5001/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    })
    .then(() => {
      setIsPending(false);
      navigate('/')
    })
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>blog title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>blog body: </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>

        <label>blog author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="akmal">akmal</option>
          <option value="nawabi">nawabi</option>
        </select>

        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>adding blog...</button>}
      </form>
    </div>
  );
}

export default Create