import { connect } from 'react-redux';

import BlogPage from 'components/containers/BlogPage';

import { likePost } from 'actions/Post';

const stateToProps = (state) => ({
  posts: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

const dispatchToProps = (dispatch) => ({
  incrementLikeCount: (id) => dispatch(likePost(id))
});

export default connect(stateToProps, dispatchToProps)(BlogPage);
