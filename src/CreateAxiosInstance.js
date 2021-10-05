import axios from 'axios';
import React from 'react';
// create axios instance
const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

function CreateAxiosInstance() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    async function loadPosts() {
      const { data } = await client.get('/1');
      setPost(data);
    }
    loadPosts();
  }, []);

  async function deletePost() {
    await client.delete('/1');
    alert('Post deleted!');
    setPost(null);
  }

  if (!post) return 'No post!';

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}

export default CreateAxiosInstance;
