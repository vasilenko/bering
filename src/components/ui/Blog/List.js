import React from 'react';
import PropTypes from 'prop-types';

import { Item } from 'semantic-ui-react';

import BlogItem from './Item';

const BlogList = ({ posts }) => {
  const items = posts.map((post) => (
    <BlogItem
      key={post.id}
      post={post}
    />
  ));

  return <Item.Group divided>{items}</Item.Group>;
};

BlogList.propTypes = {
  posts: PropTypes.arrayOf(BlogItem.propTypes.post)
};

export default BlogList;
