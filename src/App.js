import React, { useEffect, useState } from 'react';
import { postsAPI, usersAPI } from './api/post-card-data';
import PostCard from './components/post-card';
import './App.css';

const App = () => {
  const [usersPostData, setUsersPostData] = useState([]);
  useEffect(async () => {
    const { data: userData } = await usersAPI();
    const { data: postData } = await postsAPI();

    const postsWithUserData = postData.map(({
      id,
      userId,
      title,
      body,
    }) => {
      const {
        address: {
          city,
          street,
          suite,
          zipcode,
        },
        email,
        name,
      } = userData.find(({ id: postId }) => postId === userId);
      return {
        id,
        name,
        address: {
          city,
          street,
          suite,
          zipcode,
        },
        email,
        title,
        body,
      };
    });
    setUsersPostData(postsWithUserData);
  }, []);

  return (
    <div className='App'>
      { usersPostData.length > 0 ? usersPostData.map((postData) => (
        <PostCard key={postData.id} {...postData} />
      )) : <div>...Loading</div> }
    </div>
  );
};

export default App;
