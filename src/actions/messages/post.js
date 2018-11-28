import { MESSAGE } from '../../constants';

export const requestGetAllPosts = () => {
  return {
    type: MESSAGE.GET_ALL_POSTS_REQUESTED
  };
};

export const resolveGetAllPosts = data => {
  return {
    type: MESSAGE.GET_ALL_POSTS_RESOLVED,
    payload: data
  };
};

export const rejectGetAllPosts = error => {
  return {
    type: MESSAGE.GET_ALL_POSTS_REJECTED,
    payload: error
  };
};
