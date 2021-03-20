import React, { useEffect, useState } from 'react';
import { postsAPI, usersAPI } from './api/post-card-data';
import PostCard from './components/post-card';
import './App.css';

const App = () => {
  const [usersPostData, setUsersPostData] = useState([]);
  useEffect(async () => {
    const { data: userData } = await usersAPI();
    const { data: postData } = await postsAPI();

    const postsWithUserData = postData.map(({ userId, ...props }) => {
      const userPersonalData = userData.find(({ id }) => userId === id);
      return {
        ...props,
        ...userPersonalData,
      };
    });
    setUsersPostData(postsWithUserData);
  }, []);

  return usersPostData.length > 0 ? (
    <div className='App'>
      {usersPostData.map(({ id, ...postData }) => (
        <PostCard key={id} {...postData} />
      ))}
    </div>
  ) : (
    <div>...Loading</div>
  );
};

export default App;
