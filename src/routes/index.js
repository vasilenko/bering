import { postsPath } from 'helpers/routes';

import BlogPage from 'components/containers/BlogPage';
import PostPage from 'components/containers/PostPage';
import NotFoundPage from 'components/containers/NotFoundPage';

const BlogPageRoute = {
  exact: true,
  path: '/',
  component: BlogPage
};

const PostPageRoute = {
  exact: true,
  path: postsPath(),
  component: PostPage
};

const NotFoundPageRoute = {
  component: NotFoundPage
};

export default [
  BlogPageRoute,
  PostPageRoute,
  NotFoundPageRoute
];
