import request from 'superagent';
import { camelizeKeys } from 'humps';

import * as types from 'constants/actionTypes/LikeActionTypes';
import { API_BASE } from 'constants/static/env';

const requestLike = (postId) => ({
  type: types.LIKE_REQUEST,
  postId
});

const errorLike = (postId) => ({
  type: types.LIKE_ERROR,
  postId
});

const receiveLike = (postId, response) => ({
  type: types.LIKE_SUCCESS,
  count: camelizeKeys(response.body)['data']['meta']['likeCount'],
  postId
});

export function like(postId) {
  return (dispatch) => {
    dispatch(requestLike(postId));

    request
      .post(`${API_BASE}/posts/${postId}/like`)
      .end((error, response) => {
        if (error) {
          dispatch(errorLike(postId));
        } else {
          dispatch(receiveLike(postId, response));
        }
      });
  };
}
