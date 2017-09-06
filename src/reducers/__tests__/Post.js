import reducer from '../Post';

import * as types from 'constants/actionTypes/PostActionTypes';
import { LIKE_SUCCESS } from 'constants/actionTypes/LikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

describe('Post Reducer', () => {
  it('sets initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('sets isFetching while fetching', () => {
    const fetchTypes = [
      types.FETCH_POST_REQUEST,
      types.FETCH_POST_LIST_REQUEST
    ];

    fetchTypes.map((type) => {
      expect(reducer(initialState, { type }).isFetching).toEqual(true);
    });
  });

  it('sets error when fetching is failed', () => {
    const errorTypes = [
      types.FETCH_POST_ERROR,
      types.FETCH_POST_LIST_ERROR
    ];

    errorTypes.map((type) => {
      expect(reducer(initialState, { type }).error).toEqual(true);
    });
  });

  it('sets state when list is successfully fetched', () => {
    const action = {
      type: types.FETCH_POST_LIST_SUCCESS,
      data: [1, 2, 3]
    };

    const expectedState = {
      isFetching: false,
      error: false,
      entries: action.data
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('sets state when singular post is successfully fetched', () => {
    const action = {
      type: types.FETCH_POST_SUCCESS,
      data: 1
    };

    const expectedState = {
      isFetching: false,
      error: false,
      entries: [action.data]
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('updates entries on like', () => {
    const action = {
      type: LIKE_SUCCESS,
      data: {
        id: 1,
        meta: { likeCount: 10 }
      }
    };

    const initialEntries = [
      {
        id: 1,
        meta: { likeCount: 0 }
      },
      {
        id: 2,
        meta: { likeCount: 0 }
      }
    ];

    const expectedEntries = [
      {
        id: 1,
        meta: { likeCount: 10 }
      },
      {
        id: 2,
        meta: { likeCount: 0 }
      }
    ];

    const result = reducer({ entries: initialEntries }, action);

    expect(result.entries).toEqual(expectedEntries);
  });
});
