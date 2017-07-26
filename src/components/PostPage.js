import React from 'react';
import PropTypes from 'prop-types';

import NotFoundPage from './NotFoundPage';
import BlogItem from 'components/ui/Blog/Item';

import { Item, Dimmer, Loader } from 'semantic-ui-react';

const PostPage = ({ isFetching, error, post }) => {
  if (error) {
    return <NotFoundPage />;
  }

  if (isFetching) {
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    );
  }

  return (
    <Item.Group>
      <BlogItem post={post} />
    </Item.Group>
  );
};

PostPage.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.bool,
  post: BlogItem.propTypes.post
};

export default PostPage;
