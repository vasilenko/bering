import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Switch, Route, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';

import MainLayout from 'components/layouts/MainLayout';
import DevTools from 'components/DevTools';

import routes from 'routes';

import createStore from 'store';
import history from 'helpers/history';
import prepareData from 'helpers/prepareData';

const store = createStore(window.__INITIAL_STATE__);

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

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools'),
  () => {
    delete window.__INITIAL_STATE__;
  }
);

export default App;
