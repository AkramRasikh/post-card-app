import React, { useState } from 'react';
import { number, shape, string } from 'prop-types';
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
  const [titleText, setTitleText] = useState(title);
  const [bodyText, setBodyText] = useState(body);
  const postCardContainerClass = !greenBackground ? 'post-card-container' : 'post-card-container green-container';
  return (
    <div className={postCardContainerClass}>
      <div className='post-card-info-flex'>
        <div className='post-card-info-container'>
          <PostCardUserInfo name={name} email={email} />
          <PostCardAddress {...address} />
        </div>
        <PostCardCheckbox
          greenBackground={greenBackground}
          setGreenBackground={setGreenBackground}
        />
      </div>
      <hr />
      <PostCardBody
        titleText={titleText}
        setTitleText={setTitleText}
        bodyText={bodyText}
        setBodyText={setBodyText}
      />
    </div>
  );
};

PostCard.propTypes = {
  id: number.isRequired,
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
