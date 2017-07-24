import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from 'components/layouts/MainLayout';
import BlogPage from 'components/containers/BlogPage';
import PostPage from 'components/containers/PostPage';
import NotFoundPage from 'components/containers/NotFoundPage';

import { postsPath } from 'helpers/routes';

const App = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={BlogPage} />
        <Route exact path={postsPath()} component={PostPage} />
        <Route component={NotFoundPage}/>
      </Switch>
    </MainLayout>
  </Router>
);

export default App;
