import request from 'superagent';
import { camelizeKeys } from 'humps';

import * as types from 'constants/actionTypes/PostsActionTypes';
import { API_BASE } from 'constants/static/env';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  data: camelizeKeys(response.body)['data']
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    request
      .get(`${API_BASE}/posts`)
      .end((error, response) =>
        error ? dispatch(errorPosts()) : dispatch(receivePosts(response))
      );
  };
}
