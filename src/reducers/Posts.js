import * as types from 'constants/actionTypes/PostsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return Object.assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return Object.assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return Object.assign({}, initialState, { entries: action.data });
    default:
      return state;
  }
};
