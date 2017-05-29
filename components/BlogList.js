import React from 'react';

import BlogItem from './BlogItem';

class BlogList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: props.data };
  }

  render() {
    const { data } = this.state;
    const items = data.map((post) => (
      <BlogItem key={post.id} post={post} />
    ));

    return <article>{items}</article>;
  }
}

export default BlogList;
