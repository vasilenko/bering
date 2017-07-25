import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NotFoundPage from './NotFoundPage';
import BlogItem from 'components/ui/Blog/Item';

import { Item, Dimmer, Loader } from 'semantic-ui-react';

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

const PostPage = ({ post, isFetching, error }) => {
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

  return (
    <Item.Group>
      <BlogItem post={post} />
    </Item.Group>
  );
};

PostPage.propTypes = {
  post: BlogItem.propTypes.post,
  isFetching: PropTypes.bool,
  error: PropTypes.bool
};

export default connect(stateToProps)(PostPage);
