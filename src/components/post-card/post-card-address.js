import React from 'react';
import { string } from 'prop-types';

const PostCardAddress = ({
  city,
  street,
  suite,
  zipcode,
}) => (
  <div className='post-card-user-info-address'>
    <p>{street}</p>
    <p>{suite}</p>
    <p>{city}</p>
    <p>{zipcode}</p>
  </div>
);

PostCardAddress.propTypes = {
  city: string.isRequired,
  street: string.isRequired,
  suite: string.isRequired,
  zipcode: string.isRequired,
};

export default PostCardAddress;
