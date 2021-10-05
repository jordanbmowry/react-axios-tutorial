import axios from 'axios';
import React from 'react';

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

function HandleError() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    // invalid url will trigger an 404 error
    async function loadError() {
      try {
        const { data } = await axios.get(`${baseURL}/asdf`);
        setPost(data);
      } catch (error) {
        setError(error);
      }
    }
    loadError();
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!post) return 'No post!';

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default HandleError;
