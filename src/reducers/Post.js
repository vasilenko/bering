import update from 'immutability-helper';

import * as types from 'constants/actionTypes/PostActionTypes';
import { LIKE_SUCCESS } from 'constants/actionTypes/LikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

const updateLikeCount = (entries, id, count) => {
  const entryIndex = entries.findIndex(entry => entry.id == id);

  if (entryIndex == -1) {
    return entries;
  } else {
    return update(
      entries,
      {[entryIndex]: { meta: { likeCount: { $set: count } } } }
    );
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
    case types.FETCH_POST_LIST_REQUEST:
      return Object.assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
    case types.FETCH_POST_LIST_ERROR:
      return Object.assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return Object.assign({}, initialState, { entries: [action.data] });
    case types.FETCH_POST_LIST_SUCCESS:
      return Object.assign({}, initialState, { entries: action.data });
    case LIKE_SUCCESS:
      return Object.assign(
        {},
        initialState,
        {
          entries: updateLikeCount(
            state.entries,
            action.data['id'],
            action.data['meta']['likeCount']
          )
        }
      );
    default:
      return state;
  }
};
