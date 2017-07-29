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

const requestPostList = () => ({
  type: types.FETCH_POST_LIST_REQUEST
});

const errorPostList = () => ({
  type: types.FETCH_POST_LIST_ERROR
});

const receivePostList = (response) => ({
  type: types.FETCH_POST_LIST_SUCCESS,
  data: camelizeKeys(response.body)['data']
});

export function fetchPostList() {
  return (dispatch) => {
    dispatch(requestPostList());

    request
      .get(`${API_BASE}/posts`)
      .end((error, response) =>
        error ? dispatch(errorPostList()) : dispatch(receivePostList(response))
      );
  };
}
