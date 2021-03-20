import React from 'react';
import { string } from 'prop-types';

const PostCardUserInitials = ({
  firstInitial,
  lastInitial,
}) => (
  <div className='post-card-user-info-initials'>
    {firstInitial}
    {lastInitial}
  </div>
);

PostCardUserInitials.propTypes = {
  firstInitial: string.isRequired,
  lastInitial: string.isRequired,
};

export default PostCardUserInitials;
