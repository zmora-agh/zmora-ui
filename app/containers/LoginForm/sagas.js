import { takeLatest, call, put } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';
import { push } from 'react-router-redux';
import { loginURL } from '../../urls';
import { bootstrap, checkedFetch } from '../../utils/sagas';
import { loginError, loginSuccess } from './actions';
import { LOGIN } from './constants';


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

function* login({ credentials }) {
  try {
    const response = yield call(sendLogin, credentials);
    const userInfo = jwtDecode(response.token).dat;
    sessionStorage.setItem('jwtToken', response.token);
    yield put(loginSuccess(userInfo));
    yield put(push('/'));
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
