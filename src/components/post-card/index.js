import React from 'react';
import { shape, string } from 'prop-types';
import PostCardAddress from './post-card-address';
import PostCardUserInfo from './post-card-user-info';

const PostCard = ({
  address,
  name,
  email,
  ...rest
}) => {
  console.log('address: ', address);
  console.log('rest: ', rest);
  return (
    <div className='post-card-container'>
      <div className='post-card-info-container'>
        <PostCardUserInfo name={name} email={email} />
        <PostCardAddress {...address} />
      </div>
      <hr />
    </div>
  );
};

PostCard.propTypes = {
  address: shape({
    fird: string,
  }).isRequired,
  name: string.isRequired,
  email: string.isRequired,
};

export default PostCard;
