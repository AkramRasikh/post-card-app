import React from 'react';
import { string, func } from 'prop-types';

const PostCardBodyText = ({
  bodyText,
  setBodyText,
}) => (
  <label htmlFor='message'>
    Message:
    <textarea type='textarea' name='message' onChange={(e) => setBodyText(e.target.value)} value={bodyText} rows='4' cols='50' />
  </label>
);

PostCardBodyText.propTypes = {
  bodyText: string.isRequired,
  setBodyText: func.isRequired,
};

export default PostCardBodyText;
