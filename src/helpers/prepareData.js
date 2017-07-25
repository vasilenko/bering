import { parse } from 'qs';

export default (store, state) => {
  const { location, routes, params } = state;
  const query = parse(location.search.substr(1));
  const fns = routes.map((route) => (route.prepareData)).filter((e) => (e));

  fns.map((fn) => fn(store, query, params, location));
};
