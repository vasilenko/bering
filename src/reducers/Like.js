import * as types from 'constants/actionTypes/LikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  count: 0,
  postId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LIKE_REQUEST:
      return Object.assign({}, initialState, { isFetching: true });
    case types.LIKE_ERROR:
      return Object.assign({}, initialState, { error: true });
    case types.LIKE_SUCCESS:
      return Object.assign({}, initialState, { postId: action.postId, count: action.count });
    default:
      return state;
  }
};
