import { SIGNAL } from '../../constants';

export const getAllPosts = () => {
  return {
    type: SIGNAL.GET_ALL_POSTS
  };
};
