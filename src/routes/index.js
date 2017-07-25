import { postsPath } from 'helpers/routes';

import BlogPage from 'components/containers/BlogPage';
import PostPage from 'components/containers/PostPage';
import NotFoundPage from 'components/containers/NotFoundPage';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

const BlogPageRoute = {
  exact: true,
  path: '/',
  component: BlogPage,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

const PostPageRoute = {
  exact: true,
  path: postsPath(),
  component: PostPage,
  prepareData: (store, _query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};

const NotFoundPageRoute = {
  component: NotFoundPage
};

export default [
  BlogPageRoute,
  PostPageRoute,
  NotFoundPageRoute
];
