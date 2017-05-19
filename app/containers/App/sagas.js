import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';


import { homePage } from '../../local-urls';
import { deleteJwtToken, getJwtToken, haveJwtToken } from '../../utils/auth';
import { submitSaga } from '../Submit/sagas';
import { loginSuccess } from '../Login/actions';

import { LOGOUT } from './constants';

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
  logoutSaga,
  decodeJWT,
  submitSaga,
];
