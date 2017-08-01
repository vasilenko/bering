import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'semantic-ui-react';

class BlogFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.setTerm = this.setTerm.bind(this);
  }

  setTerm(e) {
    this.setState({ term: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.filterBlogList(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} >
        <Input
          size='large'
          icon='search'
          placeholder='Filter'
          value={this.state.term}
          onChange={this.setTerm}
        />
      </form>
    );
  }
}

BlogFilter.propTypes = {
  filterBlogList: PropTypes.func.isRequired
};

export default BlogFilter;
