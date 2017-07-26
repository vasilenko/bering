import request from 'superagent';
import { camelizeKeys } from 'humps';

import * as types from 'constants/actionTypes/PostActionTypes';
import { API_BASE } from 'constants/static/env';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const errorPost = (id) => ({
  type: types.FETCH_POST_ERROR,
  id
});

const receivePost = (id, response) => ({
  type: types.FETCH_POST_SUCCESS,
  data: camelizeKeys(response.body)['data'],
  id
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost(id));

    request
      .get(`${API_BASE}/posts/${id}`)
      .end((error, response) =>
        error ? dispatch(errorPost(id)) : dispatch(receivePost(id, response))
      );
  };
}
