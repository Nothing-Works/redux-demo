import { all, fork } from 'redux-saga/effects';
import { watchGetAllPosts } from './post';

export default function* root() {
  yield all([fork(watchGetAllPosts)]);
}
