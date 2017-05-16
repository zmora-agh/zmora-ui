import { takeLatest, call, put } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';
import { push } from 'react-router-redux';
import { loginURL } from '../../urls';
import { bootstrap, checkedFetch } from '../../utils/sagas';
import { setJwtToken } from '../../utils/auth';
import { loginError, loginSuccess } from './actions';
import { LOGIN } from './constants';
import { homePage } from '../../local-urls';

function sendLogin(credentials) {
  return checkedFetch(loginURL(), {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
}

function* login({ credentials, from = homePage() }) {
  try {
    const response = yield call(sendLogin, credentials);
    const userInfo = jwtDecode(response.token).dat;
    setJwtToken(response.token);
    yield put(loginSuccess(userInfo));
    yield put(push(from));
  } catch (e) {
    yield put(loginError());
  }
}

function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

export default bootstrap([
  loginSaga,
]);
