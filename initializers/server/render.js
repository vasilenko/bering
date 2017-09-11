import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import { URL } from 'url';
import { StaticRouter, Switch, Route, matchPath } from 'react-router-dom';

import Helmet from 'react-helmet';

import webpackAsset from './webpackAsset';

import MainLayout from 'components/layouts/MainLayout';

import createStore from 'store';
import routes from 'routes';

import prepareData from 'helpers/prepareData';

export default (req, res) => {
  const store = createStore();

  const location = new URL(`${req.protocol}:\\${req.get('host')}${req.originalUrl}`);
  const state = { location, routes: [], params: {} };

  routes.some(route => {
    const match = matchPath(location.pathname, route);

    if (match) {
      state.routes.push(route);
      Object.assign(state.params, match.params);
    }

    return match;
  });

  Promise.all(prepareData(store, state)).then(() => {
    const initialState = JSON.stringify(store.getState());

    const content = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <MainLayout>
            <Switch>
              {
                routes.map((route, idx) => (
                  <Route key={idx} {...route} />
                ))
              }
            </Switch>
          </MainLayout>
        </StaticRouter>
      </Provider>
    );

    const helmet = Helmet.rewind();

    res.status(200);
    res.render('index', { initialState, content, helmet, webpackAsset });
  });
};
