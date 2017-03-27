import { call, takeLatest, put } from 'redux-saga/effects';
import moment from 'moment';
import { getCurrentUserURL, getCurrentTimeURL } from '../../urls';

import {
  getCurrentUserSuccess,
  getCurrentTimeSuccess,
} from './actions';
import {
  GET_CURRENT_USER,
} from './constants';

function fetchCurrentUser() {
  return fetch(getCurrentUserURL(), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => response.json());
}

function fetchCurrentTime() {
  return fetch(getCurrentTimeURL(), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => response.json())
    .then((response) => moment(response.time));
}

function* getCurrentUser() {
  const user = yield call(fetchCurrentUser);
  yield put(getCurrentUserSuccess(user));
}

function* getCurrentUserSaga() {
  yield takeLatest(GET_CURRENT_USER, getCurrentUser);
}

function* sleep(time) {
  yield new Promise((resolve) => setTimeout(resolve, time));
}

function* synchronizeTime() {
// eslint-disable-next-line no-constant-condition
  while (true) {
    const time = yield call(fetchCurrentTime);
    yield put(getCurrentTimeSuccess(time));
    yield* sleep(5 * 60 * 1000);
  }
}

// All sagas to be loaded
export default [
  getCurrentUserSaga,
  synchronizeTime,
];
