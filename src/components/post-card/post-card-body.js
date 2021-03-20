import React from 'react';
import { string, func } from 'prop-types';

const PostCardBody = ({
  titleText,
  setTitleText,
  bodyText,
  setBodyText,
}) => (
  <div>
    <form>
      <label htmlFor='title'>
        Title:
        <input type='text' name='title' onChange={(e) => setTitleText(e.target.value)} value={titleText} />
      </label>
      <label htmlFor='message'>
        Message:
        <textarea type='textarea' name='message' onChange={(e) => setBodyText(e.target.value)} value={bodyText} rows='4' cols='50' />
      </label>
    </form>
  </div>
);

PostCardBody.propTypes = {
  titleText: string.isRequired,
  setTitleText: func.isRequired,
  bodyText: string.isRequired,
  setBodyText: func.isRequired,
};

export default PostCardBody;
