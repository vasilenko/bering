import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NotFoundPage from './NotFoundPage';
import BlogItem from 'components/ui/Blog/Item';

import { likePost } from 'actions/Post';

import { Item, Dimmer, Loader } from 'semantic-ui-react';

const stateToPostPageProps = (state) => ({
  isFetching: state.post.isFetching,
  error: state.post.error
});

const stateToBlogItemProps = (state) => ({
  post: state.post.entry
});

const dispatchToBlogItemProps = (dispatch) => ({
  incrementLikeCount: (id) => dispatch(likePost(id))
});

const WrappedBlogItem = connect(stateToBlogItemProps, dispatchToBlogItemProps)(BlogItem);

const PostPage = ({ isFetching, error }) => {
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
      <WrappedBlogItem />
    </Item.Group>
  );
};

PostPage.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.bool
};

export default connect(stateToPostPageProps)(PostPage);
