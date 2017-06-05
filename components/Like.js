import React from 'react';
import PropTypes from 'prop-types';

class Like extends React.Component {
  static propTypes = { count: PropTypes.number };
  static defaultProps = { count: 0 };

  constructor(props) {
    super(props);

    this.state = { count: props.count };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <span>
        {this.state.count}
        <button onClick={this.handleClick}>Like!</button>
      </span>
    );
  }
}

export default Like;
