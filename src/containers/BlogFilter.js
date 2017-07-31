import { connect } from 'react-redux';

import { fetchPostList } from 'actions/Post';

import BlogFilter from 'components/ui/Blog/Filter';

const dispatchToProps = (dispatch) => ({
  filterBlogList: (filter) => dispatch(fetchPostList(filter))
});

export default connect(null, dispatchToProps)(BlogFilter);
