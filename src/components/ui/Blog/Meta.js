import React from 'react';
import PropTypes from 'prop-types';

import Time from 'components/ui/Time';
import Like from 'containers/Like';

import { List } from 'semantic-ui-react';

const BlogMeta = ({ postId, author, createdAt, updatedAt, likeCount }) => (
  <List horizontal>
    <List.Item>Written by {author}</List.Item>
    <List.Item>Created at <Time datetime={createdAt} /></List.Item>
    {updatedAt &&
      <List.Item>Updated at <Time datetime={updatedAt} /></List.Item>
    }
    <List.Item>
      <Like postId={postId} count={likeCount} />
    </List.Item>
  </List>
);

BlogMeta.propTypes = {
  postId: PropTypes.number,
  author: PropTypes.string,
  createdAt: Time.propTypes.datetime.isRequired,
  updatedAt: Time.propTypes.datetime,
  likeCount: PropTypes.number
};

BlogMeta.defaultProps = {
  author: 'Anonymous'
};

export default BlogMeta;
