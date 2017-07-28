import { connect } from 'react-redux';

import BlogPieChart from 'components/ui/Blog/PieChart';

const stateToProps = (state) => ({
  data: state.post.entries.map((post) =>
    [post.title, post.meta.likeCount || 0]
  )
});

export default connect(stateToProps)(BlogPieChart);
