import React from 'react';
import PropTypes from 'prop-types';

import BlogList from 'components/ui/Blog/List';
import BlogPieChart from 'components/ui/Blog/PieChart';

import { Grid, Dimmer, Loader } from 'semantic-ui-react';

const BlogPage = ({ isFetching, error, posts }) => {
  if (error) {
    return <NotFoundPage />;
  }

  if (isFetching) {
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    );
  }

  const chartData = posts.map((post) =>
    [post.title, post.meta.likeCount || 0]
  );

  return (
    <Grid relaxed={true} stackable={true}>
      <Grid.Row>
        <Grid.Column width={12}>
          <BlogList posts={posts} />
        </Grid.Column>
        <Grid.Column width={4}>
          <BlogPieChart data={chartData} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

BlogPage.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.bool,
  posts: BlogList.propTypes.posts
};

export default BlogPage;
