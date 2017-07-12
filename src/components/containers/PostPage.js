import React from 'react';
import PropTypes from 'prop-types';

import NotFoundPage from './NotFoundPage';
import BlogItem from 'components/ui/Blog/Item';

import { Item } from 'semantic-ui-react';

import { posts as staticPosts } from 'constants/static/posts';

const PostPage = ({ match }) => {
  const post = staticPosts.find((post) => (
    post.id == match.params.id
  ));

  if (!post) {
    return <NotFoundPage />;
  }

  return (
    <Item.Group>
      <BlogItem post={post} />
    </Item.Group>
  );
};

PostPage.propTypes = {
  match: PropTypes.object
};

export default PostPage;
