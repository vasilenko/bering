import React from 'react';

import EditPostForm from 'containers/EditPostForm';
import BlogItem from 'components/ui/Blog/Item';

import withLoader from 'components/HOCs/withLoader';

import Helmet from 'react-helmet';

import { Header } from 'semantic-ui-react';

const EditPostPage = ({ post }) => (
  <div>
    <Header>Edit Post — {post.title}</Header>

    <EditPostForm post={post} />

    <Helmet title="Edit Post" />
  </div>
);

EditPostPage.propTypes = {
  post: BlogItem.propTypes.post
};

export default withLoader(EditPostPage);
