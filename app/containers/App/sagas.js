import { call, put, take, takeLatest } from 'redux-saga/effects';
import moment from 'moment';
import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';


import { getCurrentTimeURL } from '../../urls';
import { homePage } from '../../localUrls';
import { fetchWithCredentials } from '../../utils/sagas';
import { deleteJwtToken, getJwtToken, haveJwtToken } from '../../utils/auth';
import { LOGIN_SUCCESS } from '../Login/constants';
import { loginSuccess } from '../Login/actions';

import { getCurrentTimeSuccess } from './actions';
import { LOGOUT } from './constants';


function fetchCurrentTime() {
  return fetchWithCredentials(getCurrentTimeURL(), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => response.json())
    .then((response) => moment(response.time));
}

function* sleep(time) {
  yield new Promise((resolve) => setTimeout(resolve, time));
}

function* synchronizeTime() {
// eslint-disable-next-line no-constant-condition
  while (true) {
    if (!haveJwtToken()) yield take(LOGIN_SUCCESS);
    const time = yield call(fetchCurrentTime);
    yield put(getCurrentTimeSuccess(time));
    yield* sleep(5 * 60 * 1000);
  }
}

function* logout() {
  deleteJwtToken();
  yield put(push(homePage()));
}

function* logoutSaga() {
  yield takeLatest(LOGOUT, logout);
}

function* decodeJWT() {
  if (!haveJwtToken()) return;
  yield put(loginSuccess(jwtDecode(getJwtToken()).dat));
}

// All sagas to be loaded
export default [
  synchronizeTime,
  logoutSaga,
  decodeJWT,
];
