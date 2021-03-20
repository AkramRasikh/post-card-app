import React, { useEffect, useState } from 'react';
import { postsAPI, usersAPI } from './api/post-card-data';
import './App.css';

const App = () => {
  const [usersFullData, setFullUserData] = useState([]);
  useEffect(async () => {
    const { data: userData } = await usersAPI();
    const { data: postData } = await postsAPI();

    const postsManipulated = postData.map(({ userId, ...props }) => {
      const userPersonalData = userData.find((user) => userId === user.id);
      return {
        ...props,
        ...userPersonalData,
      };
    });
    setFullUserData(postsManipulated);
  }, []);

  return usersFullData ? (
    <div className='App'>Post card app</div>
  ) : (
    <div>...Loading</div>
  );
};

export default App;
