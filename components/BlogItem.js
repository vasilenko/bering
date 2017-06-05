import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import TextBox from './TextBox';

const BlogItem = ({ post }) => (
  <div>
    <Image {...post.image} />
    <TextBox>{post.text}</TextBox>
  </div>
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    text: PropTypes.string
    image: PropTypes.shape(Image.propTypes),
  })
};

export default BlogItem;
