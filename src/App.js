import React from 'react';
import { Router, Switch, Route, matchPath } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

import MainLayout from 'components/layouts/MainLayout';
import routes from 'routes';

import store from 'store';
import prepareData from 'helpers/prepareData';

const onChangeLocation = (location) => {
  const state = { location, routes: [], params: {} };

  routes.some(route => {
    const match = matchPath(location.pathname, route);

    if (match) {
      state.routes.push(route);
      Object.assign(state.params, match.params);
    }

    return match;
  });

  prepareData(store, state);
};

onChangeLocation(window.location);

const history = createBrowserHistory(Router);
history.listen(onChangeLocation);

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
