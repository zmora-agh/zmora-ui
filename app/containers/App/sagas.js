import { call, put, take, takeLatest } from 'redux-saga/effects';
import moment from 'moment';
import { push } from 'react-router-redux';

import { getCurrentTimeURL } from '../../urls';
import { homePage } from '../../localUrls';
import { fetchWithCredentials } from '../../utils/sagas';
import { deleteJwtToken, haveJwtToken } from '../../utils/auth';
import { LOGIN_SUCCESS } from '../LoginForm/constants';

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

// All sagas to be loaded
export default [
  synchronizeTime,
  logoutSaga,
];
