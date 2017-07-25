import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import MainLayout from 'components/layouts/MainLayout';
import routes from 'routes';

const history = createBrowserHistory(Router);

const App = () => (
  <Router history={history}>
    <MainLayout>
      <Switch>
        {
          routes.map((route, idx) => (
            <Route key={idx} {...route} />
          ))
        }
      </Switch>
    </MainLayout>
  </Router>
);

export default App;
