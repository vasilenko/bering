import * as types from 'constants/actionTypes/LikeActionTypes';

import { API_CALL } from 'middleware/API';

export const like = (postId) => ({
  [API_CALL]: {
    endpoint: `/posts/${postId}/like`,
    method: 'POST',
    query: {},
    types: [
      types.LIKE_REQUEST,
      types.LIKE_SUCCESS,
      types.LIKE_ERROR
    ]
  }
});
