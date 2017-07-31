import * as types from 'constants/actionTypes/PostActionTypes';

import { API_CALL } from 'middleware/API';

export const fetchPost = (id) => ({
  [API_CALL]: {
    endpoint: `/posts/${id}`,
    method: 'GET',
    query: {},
    types: [
      types.FETCH_POST_REQUEST,
      types.FETCH_POST_SUCCESS,
      types.FETCH_POST_ERROR
    ]
  }
});

export const fetchPostList = () => ({
  [API_CALL]: {
    endpoint: '/posts',
    method: 'GET',
    query: {},
    types: [
      types.FETCH_POST_LIST_REQUEST,
      types.FETCH_POST_LIST_SUCCESS,
      types.FETCH_POST_LIST_ERROR
    ]
  }
});
