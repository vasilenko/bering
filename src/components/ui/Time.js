import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Time = ({ datetime }) => (
  <time>
    {moment(datetime).calendar()}
  </time>
);

Time.propTypes = { datetime: PropTypes.string };

export default Time;
