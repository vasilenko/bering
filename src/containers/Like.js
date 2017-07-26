import { connect } from 'react-redux';

import Like from 'components/ui/Like';

import { like } from 'actions/Like';

const dispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(like(ownProps.postId))
});

export default connect(null, dispatchToProps)(Like);
