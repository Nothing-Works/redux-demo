import http from './httpService';
import { url } from '../constants';

const postsEndpoint = url.posts;

export const getPosts = () => {
  return http.get(postsEndpoint);
};
