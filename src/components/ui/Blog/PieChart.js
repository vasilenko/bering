import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

class BlogPieChart extends React.Component {
  static propTypes = { data: PropTypes.array };

  componentDidMount() {
    if (!__CLIENT__) return;

    const c3 = require('c3');

    this.chart = c3.generate(
      {
        bindto: ReactDOM.findDOMNode(this.refs.chart),
        data: {
          columns: this.props.data,
          type: 'pie'
        }
      }
    );
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(newProps) {
    this.chart.load({ columns: newProps.data });
  }

  render() {
    return <div ref="chart" />;
  }
}

export default BlogPieChart;
