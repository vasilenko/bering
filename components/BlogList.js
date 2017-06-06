import React from 'react';
import PropTypes from 'prop-types';

import BlogItem from './BlogItem';

class BlogList extends React.Component {
  static propTypes = {
    posts: PropTypes.arrayOf(BlogItem.propTypes.post)
  }

  constructor(props) {
    super(props);

    this.state = { posts: props.posts };
  }

  render() {
    const { posts } = this.state;
    const items = posts.map((post) => (
      <li key={post.id}>
        <BlogItem post={post} />
      </li>
    ));

    return <ul>{items}</ul>;
  }
}

export default BlogList;
