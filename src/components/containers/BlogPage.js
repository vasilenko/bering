import React from 'react';

import request from 'superagent';
import { camelizeKeys } from 'humps';

import { API_BASE } from 'constants/static/env';

import BlogList from 'components/ui/Blog/List';
import BlogPieChart from 'components/ui/Blog/PieChart';

import { Grid } from 'semantic-ui-react';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
    this.incrementLikeCount = this.incrementLikeCount.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request
      .get(`${API_BASE}/posts`)
      .end((err, res) =>
        this.setState({ posts: camelizeKeys(res.body)['data'] })
      );
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
      <Grid relaxed={true} stackable={true}>
        <Grid.Row>
          <Grid.Column width={12}>
            <BlogList posts={posts} incrementLikeCount={this.incrementLikeCount} />
          </Grid.Column>
          <Grid.Column width={4}>
            <BlogPieChart data={pieChartData} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default BlogPage;

