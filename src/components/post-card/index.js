import React from 'react';
import { shape, string } from 'prop-types';
import PostCardAddress from './post-card-address';
import PostCardUserInfo from './post-card-user-info';
import PostCardBody from './post-card-body';

const PostCard = ({
  address,
  name,
  email,
  title,
  body,
  ...rest
}) => {
  console.log('rest: ', rest);
  return (
    <div className='post-card-container'>
      <div className='post-card-info-container'>
        <PostCardUserInfo name={name} email={email} />
        <PostCardAddress {...address} />
      </div>
      <hr />
      <PostCardBody title={title} body={body} />
    </div>
  );
};

PostCard.propTypes = {
  address: shape({
    city: string.isRequired,
    street: string.isRequired,
    suite: string.isRequired,
    zipcode: string.isRequired,
  }).isRequired,
  name: string.isRequired,
  email: string.isRequired,
  title: string.isRequired,
  body: string.isRequired,
};

export default PostCard;
