import React from 'react';
import PropTypes from 'prop-types';

import { Item } from 'semantic-ui-react';

import BlogItem from './Item';

const BlogList = ({ posts, incrementLikeCount }) => {
  const items = posts.map((post) => (
    <BlogItem
      key={post.id}
      post={post}
      incrementLikeCount={incrementLikeCount}
    />
  ));

  return <Item.Group divided>{items}</Item.Group>;
};

BlogList.propTypes = {
  posts: PropTypes.arrayOf(BlogItem.propTypes.post),
  incrementLikeCount: PropTypes.func
};

export default BlogList;
