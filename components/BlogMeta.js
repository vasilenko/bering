import React from 'react';
import PropTypes from 'prop-types';

import Time from './Time';
import Like from './Like';

const BlogMeta = ({ author, createdAt, updatedAt, likeCount }) => (
  <ul>
    <li>Author: {author}</li>
    <li>Created at: <Time datetime={createdAt} /></li>
    {updatedAt &&
      <li>Updated at: <Time datetime={updatedAt} /></li>
    }
    <li>Likes: <Like count={likeCount} /></li>
  </ul>
);

BlogMeta.propTypes = {
  author: PropTypes.string,
  createdAt: Time.propTypes.datetime.isRequired,
  updatedAt: Time.propTypes.datetime,
  likeCount: Like.propTypes.count
};

BlogMeta.defaultProps = {
  author: 'Anonymous'
};

export default BlogMeta;
