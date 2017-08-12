import { createStore, applyMiddleware, compose } from 'redux';

import APIMiddleware from 'middleware/API';
import DevTools from 'components/DevTools';

import reducers from 'reducers';

export default (initialState) => createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(APIMiddleware),
    DevTools.instrument()
  )
);
