import axios from 'axios';
import React from 'react';

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

function Delete() {
  async function deletePost() {
    const response = await axios.delete(`${baseURL}/1`);
    alert(`Post deleted! Status: ${response.status}.`);
  }

  return (
    <div>
      <button style={{ marginTop: '1.5rem' }} onClick={deletePost}>
        Delete Post
      </button>
    </div>
  );
}

export default Delete;
