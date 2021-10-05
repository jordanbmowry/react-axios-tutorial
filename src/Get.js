import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Get() {
  const baseURL = 'https://jsonplaceholder.typicode.com/posts/1';

  const [post, setPost] = useState(null);

  useEffect(() => {
    let isMounted = true;
    // cancel request using cancel token https://www.npmjs.com/package/axios#cancellation
    const cancelToken = axios.CancelToken.source();
    async function getPosts(url) {
      try {
        const { data } = await axios.get(url, {
          // pass token to get request
          cancelToken: cancelToken.token,
        });
        setPost(() => data);
      } catch (error) {
        // throw error if error is not cancellation
        if (!axios.isCancel(error)) throw error;
      }
    }
    if (isMounted) {
      getPosts(baseURL);
    }
    // return clean up function and call cancel with token
    return () => {
      isMounted = false;
      return cancelToken.cancel();
    };
  }, []);

  if (!post) return null;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Get;
