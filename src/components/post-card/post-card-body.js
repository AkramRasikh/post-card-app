import React, { useState } from 'react';
import { string } from 'prop-types';

const PostCardBody = ({ title, body }) => {
  const [titleText, setTitleText] = useState(title);
  const [bodyText, setBodyText] = useState(body);
  return (
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
};

PostCardBody.propTypes = {
  title: string.isRequired,
  body: string.isRequired,
};

export default PostCardBody;
