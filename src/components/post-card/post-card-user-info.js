import React from 'react';
import { string } from 'prop-types';

const PostCardUserInfo = ({
  name,
  email,
}) => {
  const [firstName, lastName] = name.split(' ');
  return (
    <div className='post-card-user-info'>
      <div>
        {firstName[0]}
        {lastName[0]}
      </div>
      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

PostCardUserInfo.propTypes = {
  name: string.isRequired,
  email: string.isRequired,
};

export default PostCardUserInfo;
