import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import TextBox from './TextBox';
import BlogMeta from './BlogMeta';

const BlogItem = ({ post }) => (
  <div>
    <Image {...post.image} />
    <TextBox>{post.text}</TextBox>
    <BlogMeta {...post.meta} />
  </div>
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.shape(Image.propTypes),
    text: PropTypes.string,
    meta: PropTypes.shape(BlogMeta.propTypes)
  })
};

export default BlogItem;
