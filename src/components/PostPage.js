import React from 'react';

import BlogItem from 'components/ui/Blog/Item';

import withLoader from 'components/HOCs/withLoader';

import { Item } from 'semantic-ui-react';

const PostPage = ({ post }) => (
  <Item.Group>
    <BlogItem post={post} />
  </Item.Group>
);

PostPage.propTypes = {
  post: BlogItem.propTypes.post
};

export default withLoader(PostPage);
