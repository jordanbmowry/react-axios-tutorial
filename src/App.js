import React from 'react';
import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';
import HandleError from './HandleError';
import CreateAxiosInstance from './CreateAxiosInstance.js';
import UseAxiosHook from './UseAxiosHook';

function App() {
  return (
    <React.Fragment>
      <Get />
      <Post />
      <Put />
      <Delete />
      <HandleError />
      <CreateAxiosInstance />
      <UseAxiosHook />
    </React.Fragment>
  );
}

export default App;
