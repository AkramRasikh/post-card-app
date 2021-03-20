import React from 'react';
import { string, func } from 'prop-types';

const PostCardBodyTitle = ({
  titleText,
  setTitleText,
}) => (
  <label htmlFor='title'>
    Title:
    <input type='text' name='title' onChange={(e) => setTitleText(e.target.value)} value={titleText} />
  </label>
);

PostCardBodyTitle.propTypes = {
  titleText: string.isRequired,
  setTitleText: func.isRequired,
};

export default PostCardBodyTitle;
