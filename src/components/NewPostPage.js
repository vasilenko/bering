import React from 'react';

import PostForm from 'containers/PostForm';

import withLoader from 'components/HOCs/withLoader';

import Helmet from 'react-helmet';

import { Header } from 'semantic-ui-react';

const NewPostPage = () => (
  <div>
    <Header>New Post</Header>

    <PostForm />

    <Helmet title="New Post" />
  </div>
);

export default withLoader(NewPostPage);
