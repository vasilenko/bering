import request from 'superagent';
import { camelizeKeys } from 'humps';

import * as types from 'constants/actionTypes/PostActionTypes';
import { API_BASE } from 'constants/static/env';

import { fetchPosts } from './Posts';

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

const requestLike = (id) => ({
  type: types.LIKE_REQUEST,
  id
});

const errorLike = (id) => ({
  type: types.LIKE_ERROR,
  id
});

export function likePost(id) {
  return (dispatch) => {
    dispatch(requestLike());

    request
      .post(`${API_BASE}/posts/${id}/like`)
      .end((error, response) => {
        if (error) {
          dispatch(errorLike(id));
        } else {
          dispatch(receivePost(id, response));

          // Reload all posts for simplicity
          // ¯\_(ツ)_/¯
          dispatch(fetchPosts());
        }
      });
  };
}
