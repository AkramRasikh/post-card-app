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
      } = userData.find(({ id: oneUserId }) => userId === oneUserId);
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

  return usersPostData.length > 0 ? (
    <div className='App'>
      {usersPostData.map((postData) => (
        <PostCard key={postData.id.toString()} {...postData} />
      ))}
    </div>
  ) : (
    <div>...Loading</div>
  );
};

export default App;
