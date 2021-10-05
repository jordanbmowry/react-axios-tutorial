import axios from 'axios';
import React, { useState } from 'react';

function Post() {
  const baseURL = 'https://jsonplaceholder.typicode.com/posts';

  const initialState = {
    title: '',
    body: '',
  };

  const [post, setPost] = useState(initialState);

  async function createPost() {
    const { data } = await axios.post(baseURL, {
      title: 'Hello World!',
      body: 'This is a new post.',
    });
    setPost(data);
  }

  return (
    <div>
      <h1>{post.title ? post.title : null}</h1>
      <p>{post.body ? post.body : null}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}

export default Post;
