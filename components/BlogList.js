import React from 'react';
import PropTypes from 'prop-types';

import BlogItem from './BlogItem';

const BlogList = ({ posts, incrementLikeCount }) => {
    const items = posts.map((post) => (
      <li key={post.id}>
        <BlogItem post={post} incrementLikeCount={incrementLikeCount} />
      </li>
    ));

    return <ul>{items}</ul>;
};

BlogList.propTypes = {
  posts: PropTypes.arrayOf(BlogItem.propTypes.post)
}

export default BlogList;
