import axios from 'axios';
import React from 'react';

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

function Put() {
  const initialState = {
    title: '',
    body: '',
  };

  const [post, setPost] = React.useState(initialState);

  async function updatePost() {
    const { data } = await axios.put(`${baseURL}/1`, {
      title: 'Hello World!',
      body: 'This is an updated post.',
    });

    setPost(() => data);
  }

  return (
    <div>
      <h1>{post.title ? post.title : null}</h1>
      <p>{post.body ? post.body : null}</p>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}

export default Put;
