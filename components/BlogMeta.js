import React from 'react';
import PropTypes from 'prop-types';

import Time from './Time';

const BlogMeta = ({ author, createdAt, updatedAt }) => (
  <ul>
    <li>Author: {author}</li>
    <li>Created at: <Time datetime={createdAt} /></li>
    <li>Updated at: <Time datetime={updatedAt} /></li>
  </ul>
);

BlogMeta.propTypes = {
  author: PropTypes.string,
  createdAt: Time.propTypes.datetime.isRequired,
  updatedAt: Time.propTypes.datetime
};

BlogMeta.defaultProps = {
  author: 'Anonymous'
};

export default BlogMeta;
