import { URL } from 'url';
import { matchPath } from 'react-router-dom';

import store from 'store';
import routes from 'routes';

import prepareData from 'helpers/prepareData';

export default (req, res) => {
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

    res.status(200);
    res.render('index', { initialState });
  });
};
