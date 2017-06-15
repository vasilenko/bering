import React from 'react';
import c3 from 'c3';

import PropTypes from 'prop-types';

class PieChart extends React.Component {
  static propTypes = { data: PropTypes.array }

  componentDidMount() {
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

export default PieChart;