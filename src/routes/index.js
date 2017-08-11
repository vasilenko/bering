import { postsPath } from 'helpers/routes';

import BlogPage from 'containers/BlogPage';
import PostPage from 'containers/PostPage';
import NotFoundPage from 'components/NotFoundPage';

import { fetchPostList, fetchPost } from 'actions/Post';

const BlogPageRoute = {
  exact: true,
  path: '/',
  component: BlogPage,
  prepareData: (store) => (
    store.dispatch(fetchPostList())
  )
};

const PostPageRoute = {
  exact: true,
  path: postsPath(),
  component: PostPage,
  prepareData: (store, _query, params) => (
    store.dispatch(fetchPost(params.id))
  )
};

const NotFoundPageRoute = {
  component: NotFoundPage
};

export default [
  BlogPageRoute,
  PostPageRoute,
  NotFoundPageRoute
];
