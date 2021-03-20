import React from 'react';
import { string } from 'prop-types';
import PostCardUserInitials from './post-card-user-initials';

const PostCardUserInfo = ({
  name,
  email,
}) => {
  const [firstName, lastName] = name.split(' ');
  return (
    <div className='post-card-user-info'>
      <PostCardUserInitials firstInitial={firstName[0]} lastInitial={lastName[0]} />
      <div className='post-card-user-info-name-email'>
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
