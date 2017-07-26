import { connect } from 'react-redux';

import Like from 'components/ui/Like';

import { like } from 'actions/Like';

const stateToProps = (state, ownProps) => {
  const count = state.like.postId == ownProps.postId ? state.like.count : ownProps.count;
  return { count };
};

const dispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(like(ownProps.postId))
});

export default connect(stateToProps, dispatchToProps)(Like);
