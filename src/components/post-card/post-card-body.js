import React from 'react';
import { string, func } from 'prop-types';
import PostCardBodyTitle from './post-card-body-title';
import PostCardBodyText from './post-card-body-text';

const PostCardBody = ({
  titleText,
  setTitleText,
  bodyText,
  setBodyText,
}) => (
  <form>
    <PostCardBodyTitle titleText={titleText} setTitleText={setTitleText} />
    <PostCardBodyText bodyText={bodyText} setBodyText={setBodyText} />
  </form>
);

PostCardBody.propTypes = {
  titleText: string.isRequired,
  setTitleText: func.isRequired,
  bodyText: string.isRequired,
  setBodyText: func.isRequired,
};

export default PostCardBody;
