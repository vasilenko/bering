import request from 'superagent';
import { stringify } from 'qs';
import { camelizeKeys } from 'humps';

import { API_BASE } from 'constants/static/env';

const APICall = ({ endpoint, method, query, payload }) => (
  new Promise((resolve, reject) => {
    let r = request[method.toLowerCase()](`${API_BASE}${endpoint}`);

    if (query) {
      r.query(stringify(query));
    }

    if (payload) {
      r = r.send(payload);
    }

    r.end((error, response) => (
      error ? reject(error) : resolve(response)
    ));
  })
);

const nextAction = (action, data) => (
  Object.assign({}, action, data, { [API_CALL]: undefined })
);

export const API_CALL = 'API_CALL';

export default () => next => action => {
  if (!action[API_CALL]) {
    return next(action);
  }

  const [requestType, successType, failureType] = action[API_CALL].types;

  next(nextAction(action, { type: requestType }));

  const pick = ({ endpoint, method, query, payload }) => ({ endpoint, method, query, payload });
  const promise = APICall(pick(action[API_CALL]));

  promise.then(
    (response) => next(
      nextAction(
        action,
        { type: successType, data: camelizeKeys(response.body)['data'] }
      )
    ),
    (error) => next(
      nextAction(
        action,
        { type: failureType, error }
      )
    )
  );

  return promise;
};
