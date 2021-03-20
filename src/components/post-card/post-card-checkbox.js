import { bool, func } from 'prop-types';
import React from 'react';

const PostCardCheckbox = ({
  greenBackground,
  setGreenBackground,
}) => (
  <form>
    <input
      type='checkbox'
      value={greenBackground}
      onChange={() => setGreenBackground(!greenBackground)}
    />
  </form>
);

PostCardCheckbox.propTypes = {
  greenBackground: bool.isRequired,
  setGreenBackground: func.isRequired,
};

export default PostCardCheckbox;
