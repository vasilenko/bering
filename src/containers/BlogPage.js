import { connect } from 'react-redux';

import BlogPage from 'components/BlogPage';

const stateToProps = (state) => ({
  isFetching: state.post.isFetching,
  error: state.post.error,
  posts: state.post.entries
});

export default connect(stateToProps)(BlogPage);
