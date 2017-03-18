import { call, takeLatest, put } from 'redux-saga/effects';

import {
  getCurrentUserSuccess,
} from './actions';
import {
  GET_CURRENT_USER,
} from './constants';

function fetchCurrentUser() {
  return fetch('http://localhost:8080/currentUser', {
    method: 'GET',
  }).then((response) => response.json());
}

function* getCurrentUser() {
  const user = yield call(fetchCurrentUser);
  yield put(getCurrentUserSuccess(user));
}

function* getCurrentUserSaga() {
  yield takeLatest(GET_CURRENT_USER, getCurrentUser);
}

// All sagas to be loaded
export default [
  getCurrentUserSaga,
];
