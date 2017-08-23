import { postPath, editPostPath } from 'helpers/routes';

import initialLoad from 'helpers/initialLoad';

import BlogPage from 'containers/BlogPage';
import PostPage from 'containers/PostPage';
import NewPostPage from 'components/NewPostPage';
import EditPostPage from 'containers/EditPostPage';
import AboutPage from 'components/AboutPage';
import NotFoundPage from 'components/NotFoundPage';

import { fetchPostList, fetchPost } from 'actions/Post';

const BlogPageRoute = {
  exact: true,
  path: '/',
  component: BlogPage,
  prepareData: (store) => {
    if (!initialLoad()) return store.dispatch(fetchPostList());
  }
};

const PostPageRoute = {
  exact: true,
  path: postPath(),
  component: PostPage,
  prepareData: (store, _query, params) => {
    if (!initialLoad()) return store.dispatch(fetchPost(params.id));
  }
};

const NewPostPageRoute = {
  exact: true,
  path: '/new',
  component: NewPostPage
};

const EditPostPageRoute = {
  exact: true,
  path: editPostPath(),
  component: EditPostPage,
  prepareData: (store, _query, params) => {
    if (!initialLoad()) return store.dispatch(fetchPost(params.id));
  }
};

const AboutPageRoute = {
  exact: true,
  path: '/about',
  component: AboutPage
};

const NotFoundPageRoute = {
  component: NotFoundPage
};

export default [
  BlogPageRoute,
  PostPageRoute,
  NewPostPageRoute,
  EditPostPageRoute,
  AboutPageRoute,
  NotFoundPageRoute
];
