import React from 'react';
import PropTypes from 'prop-types';

import BlogItem from './BlogItem';

const BlogList = ({ posts }) => {
    const items = posts.map((post) => (
      <li key={post.id}>
        <BlogItem post={post} />
      </li>
    ));

    return <ul>{items}</ul>;
};

BlogList.propTypes = {
  posts: PropTypes.arrayOf(BlogItem.propTypes.post)
}

export default BlogList;
