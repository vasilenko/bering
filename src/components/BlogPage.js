import React from 'react';

import BlogList from 'components/ui/Blog/List';
import BlogPieChart from 'containers/BlogPieChart';

import withLoader from 'components/HOCs/withLoader';

import { Grid } from 'semantic-ui-react';

const BlogPage = ({ posts }) => (
  <Grid relaxed={true} stackable={true}>
    <Grid.Row>
      <Grid.Column width={12}>
        <BlogList posts={posts} />
      </Grid.Column>
      <Grid.Column width={4}>
        <BlogPieChart />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

BlogPage.propTypes = {
  posts: BlogList.propTypes.posts
};

export default withLoader(BlogPage);
