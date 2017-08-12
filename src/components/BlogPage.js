import React from 'react';

import Helmet from 'react-helmet';

import BlogList from 'components/ui/Blog/List';
import BlogPieChart from 'containers/BlogPieChart';
import BlogFilter from 'containers/BlogFilter';

import withLoader from 'components/HOCs/withLoader';

import { Grid } from 'semantic-ui-react';

const BlogPage = ({ posts }) => (
  <Grid relaxed={true} stackable={true}>
    <Grid.Row>
      <Grid.Column width={12}>
        <BlogList posts={posts} />
      </Grid.Column>
      <Grid.Column width={4}>
        <BlogFilter />
        <BlogPieChart />
      </Grid.Column>
    </Grid.Row>

    <Helmet title="Bering & Aleut" />
  </Grid>
);

BlogPage.propTypes = {
  posts: BlogList.propTypes.posts
};

export default withLoader(BlogPage);
