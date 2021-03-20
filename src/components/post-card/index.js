import React, { useState } from 'react';
import { shape, string } from 'prop-types';
import PostCardAddress from './post-card-address';
import PostCardUserInfo from './post-card-user-info';
import PostCardBody from './post-card-body';
import PostCardCheckbox from './post-card-checkbox';

const PostCard = ({
  address,
  name,
  email,
  title,
  body,
}) => {
  const [greenBackground, setGreenBackground] = useState(false);
  const postCardContainerClass = !greenBackground ? 'post-card-container' : 'post-card-container green-container';
  return (
    <div className={postCardContainerClass}>
      <div className='post-card-info-container'>
        <PostCardUserInfo name={name} email={email} />
        <PostCardAddress {...address} />
        <PostCardCheckbox
          greenBackground={greenBackground}
          setGreenBackground={setGreenBackground}
        />
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
