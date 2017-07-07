import React from 'react';
import PropTypes from 'prop-types';

import Time from 'components/ui/Time';
import Like from 'components/ui/Like';

import { List } from 'semantic-ui-react';

const BlogMeta = ({ author, createdAt, updatedAt, likeCount, incrementLikeCount }) => (
  <List horizontal>
    <List.Item>Written by {author}</List.Item>
    <List.Item>Created at <Time datetime={createdAt} /></List.Item>
    {updatedAt &&
      <List.Item>Updated at <Time datetime={updatedAt} /></List.Item>
    }
    <List.Item>
      <Like count={likeCount} increment={incrementLikeCount} />
    </List.Item>
  </List>
);

BlogMeta.propTypes = {
  author: PropTypes.string,
  createdAt: Time.propTypes.datetime.isRequired,
  updatedAt: Time.propTypes.datetime,
  likeCount: Like.propTypes.count,
  incrementLikeCount: Like.propTypes.increment
};

BlogMeta.defaultProps = {
  author: 'Anonymous'
};

export default BlogMeta;
