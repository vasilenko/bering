import { connect } from 'react-redux';

import EditPostPage from 'components/EditPostPage';

const stateToProps = (state) => ({
  isFetching: state.post.isFetching,
  error: state.post.error,
  post: state.post.entries[0]
});

export default connect(stateToProps)(EditPostPage);
