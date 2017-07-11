import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from 'components/layouts/MainLayout';
import BlogPage from 'components/containers/BlogPage';
import Empty from 'components/containers/Empty';

const App = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={BlogPage} />
        <Route component={Empty}/>
      </Switch>
    </MainLayout>
  </Router>
);

export default App;
