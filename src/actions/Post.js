import request from 'superagent';
import { camelizeKeys } from 'humps';

import * as types from 'constants/actionTypes/PostActionTypes';
import { API_BASE } from 'constants/static/env';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

const receivePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  data: camelizeKeys(response.body)['data']
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost(id));

    request
      .get(`${API_BASE}/posts/${id}`)
      .end((error, response) =>
        error ? dispatch(errorPost()) : dispatch(receivePost(response))
      );
  };
}
