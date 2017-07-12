import React from 'react';

import BlogList from 'components/ui/Blog/List';
import BlogPieChart from 'components/ui/Blog/PieChart';

import { Container, Divider } from 'semantic-ui-react';

import { posts as staticPosts } from 'constants/static/posts';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: staticPosts };
    this.incrementLikeCount = this.incrementLikeCount.bind(this);
  }

  incrementLikeCount(id) {
    const { posts } = this.state;
    const updatedPosts = posts.map((post) => {
      if (post.id != id) {
        return post;
      }

      return {
        ...post,
        meta: { ...post.meta, likeCount: (post.meta.likeCount || 0) + 1 }
      };
    });

    this.setState({ posts: updatedPosts });
  }

  render() {
    const { posts } = this.state;
    const pieChartData = posts.map((post) =>
      [post.title, post.meta.likeCount || 0]
    );

    return (
      <Container>
        <BlogList posts={posts} incrementLikeCount={this.incrementLikeCount} />
        <Divider />
        <BlogPieChart data={pieChartData} />
      </Container>
    );
  }
}

export default BlogPage;

