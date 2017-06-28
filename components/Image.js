import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => (
  <img {...props} />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Image;
