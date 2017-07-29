import { connect } from 'react-redux';

import PostPage from 'components/PostPage';

const stateToProps = (state) => ({
  isFetching: state.post.isFetching,
  error: state.post.error,
  post: state.post.entries[0]
});

export default connect(stateToProps)(PostPage);
