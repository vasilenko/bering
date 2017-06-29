import React from 'react';
import PropTypes from 'prop-types';

import BlogMeta from './Meta';
import Image from 'components/ui/Image';
import TextBox from 'components/ui/TextBox';

const BlogItem = ({ post, incrementLikeCount }) => (
  <div>
    <Image {...post.image} />
    <TextBox>{post.text}</TextBox>
    <BlogMeta {...Object.assign(post.meta, { incrementLikeCount: () => incrementLikeCount(post.id) })} />
  </div>
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.shape(Image.propTypes),
    text: PropTypes.string,
    meta: PropTypes.shape(BlogMeta.propTypes),
    incrementLikeCount: PropTypes.func
  })
};

export default BlogItem;
