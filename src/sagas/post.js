import { take, put, call, fork } from 'redux-saga/effects';
import messages from '../actions/messages';
import signals from '../actions/signals';
import { services } from '../services';

function* fetchPosts() {
  yield put(messages.requestGetAllPosts());

  try {
    const response = yield call(services.getPosts);
    yield put(messages.resolveGetAllPosts(response.data));
  } catch (response) {
    yield put(messages.rejectGetAllPosts(response.data));
  }
}

export function* watchGetAllPosts() {
  yield take(signals.getAllPosts);
  yield fork(fetchPosts);
}
