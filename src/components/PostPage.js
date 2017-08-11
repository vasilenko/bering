import React from 'react';

import Helmet from 'react-helmet';

import BlogItem from 'components/ui/Blog/Item';

import withLoader from 'components/HOCs/withLoader';

import { Item } from 'semantic-ui-react';

const PostPage = ({ post }) => (
  <Item.Group>
    <BlogItem post={post} />

    <Helmet title={post.title} />
  </Item.Group>
);

PostPage.propTypes = {
  post: BlogItem.propTypes.post
};

export default withLoader(PostPage);
