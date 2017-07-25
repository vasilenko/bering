import * as types from 'constants/actionTypes/PostActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return Object.assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return Object.assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return Object.assign({}, initialState, { entry: action.data });
    default:
      return state;
  }
};
