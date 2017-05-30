import { put, takeLatest } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import jwtDecode from 'jwt-decode';

import { homePage } from '../../local-urls';
import { deleteJwtToken, getJwtToken, haveJwtToken } from '../../utils/auth';
import { submitSaga } from '../Submit/sagas';
import { loginSuccess } from '../Login/actions';
import { LOGOUT } from './constants';
import { client } from '../../graphql';

function* logout() {
  deleteJwtToken();
  yield put(replace(homePage()));
  client.resetStore();
}

function* logoutSaga() {
  yield takeLatest(LOGOUT, logout);
}

function* decodeJWT() {
  if (!haveJwtToken()) return;
  yield put(loginSuccess(jwtDecode(getJwtToken())));
}

// All sagas to be loaded
export default [
  logoutSaga,
  decodeJWT,
  submitSaga,
];
