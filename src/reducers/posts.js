import { MESSAGE } from '../constants';
import initialState from '../initialState';

export default (state = initialState.posts, { type, payload }) => {
  switch (type) {
    case MESSAGE.GET_ALL_POSTS_REQUESTED:
      return { ...state, isFetching: true, error: null };

    case MESSAGE.GET_ALL_POSTS_RESOLVED:
      return { ...state, data: payload, isFetching: false, error: null };

    case MESSAGE.GET_ALL_POSTS_REJECTED:
      return { ...state, error: payload, isFetching: false };

    default:
      return state;
  }
};
