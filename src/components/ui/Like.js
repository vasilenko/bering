import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

const Like = ({ count, increment }) => (
  <Button
    content="Like"
    icon="heart"
    label={{ as: 'a', basic: true, content: count }}
    labelPosition="right"
    onClick={increment}
  />
);

Like.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func
};

Like.defaultProps = { count: 0 };

export default Like;
