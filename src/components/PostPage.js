import React from 'react';

import Helmet from 'react-helmet';

import BlogItem from 'components/ui/Blog/Item';
import Link from 'components/ui/Link';

import withLoader from 'components/HOCs/withLoader';

import { Item } from 'semantic-ui-react';

import { editPostPath } from 'helpers/routes';

const PostPage = ({ post }) => (
  <Item.Group>
    <BlogItem post={post} />
    <Link to={editPostPath(post.id)}>Edit Post</Link>

    <Helmet title={post.title} />
  </Item.Group>
);

PostPage.propTypes = {
  post: BlogItem.propTypes.post
};

export default withLoader(PostPage);
