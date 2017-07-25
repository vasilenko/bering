import React from 'react';
import { connect } from 'react-redux';

import BlogList from 'components/ui/Blog/List';
import BlogPieChart from 'components/ui/Blog/PieChart';

import { Grid } from 'semantic-ui-react';

const stateToBlogListProps = (state) => ({
  posts: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

const stateToPieChartProps = (state) => ({
  data: state.posts.entries.map((post) =>
    [post.title, post.meta.likeCount || 0]
  )
});

const WrappedBlogList = connect(stateToBlogListProps)(BlogList);
const WrappedPieChart = connect(stateToPieChartProps)(BlogPieChart);

const BlogPage = () => (
  <Grid relaxed={true} stackable={true}>
    <Grid.Row>
      <Grid.Column width={12}>
        <WrappedBlogList />
      </Grid.Column>
      <Grid.Column width={4}>
        <WrappedPieChart />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default BlogPage;
