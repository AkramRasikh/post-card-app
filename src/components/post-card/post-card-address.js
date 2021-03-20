import React from 'react';
import { string } from 'prop-types';

const PostCardAddress = ({
  city,
  street,
  suite,
  zipcode,
}) => (
  <div>
    <p>{city}</p>
    <p>{street}</p>
    <p>{suite}</p>
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
