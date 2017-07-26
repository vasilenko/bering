import { connect } from 'react-redux';

import PostPage from 'components/PostPage';

// import { likePost } from 'actions/Post';

const stateToProps = (state) => ({
  isFetching: state.post.isFetching,
  error: state.post.error,
  post: state.post.entry
});

const dispatchToProps = (dispatch) => ({
  // incrementLikeCount: (id) => dispatch(likePost(id))
});

export default connect(stateToProps, dispatchToProps)(PostPage);
