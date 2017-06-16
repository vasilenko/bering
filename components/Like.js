import React from 'react';
import PropTypes from 'prop-types';

const Like = ({ count, increment }) => (
  <span>
    {count}
    <button onClick={increment}>Like!</button>
  </span>
);

Like.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func
};

Like.defaultProps = { count: 0 };

export default Like;
