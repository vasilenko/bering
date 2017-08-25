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

export const fetchPostList = (filter) => ({
  [API_CALL]: {
    endpoint: '/posts',
    method: 'GET',
    query: { filter },
    types: [
      types.FETCH_POST_LIST_REQUEST,
      types.FETCH_POST_LIST_SUCCESS,
      types.FETCH_POST_LIST_ERROR
    ]
  }
});

export const createPost = (values) => ({
  [API_CALL]: {
    endpoint: '/posts',
    method: 'POST',
    payload: { post: values },
    types: [
      types.CREATE_POST_REQUEST,
      types.CREATE_POST_SUCCESS,
      types.CREATE_POST_ERROR
    ]
  }
});

export const updatePost = (id, values) => ({
  [API_CALL]: {
    endpoint: `/posts/${id}`,
    method: 'PUT',
    payload: { post: values },
    types: [
      types.UPDATE_POST_REQUEST,
      types.UPDATE_POST_SUCCESS,
      types.UPDATE_POST_ERROR
    ]
  }
});

