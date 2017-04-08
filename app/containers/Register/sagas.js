import { takeLatest, call, put } from 'redux-saga/effects';
import { registerURL } from '../../urls';
import { bootstrap, checkedFetch } from '../../utils/sagas';
import { registerError, registerSuccess } from './actions';
import { REGISTER } from './constants';
import { login } from '../Login/actions';

function sendRegister(user) {
  return checkedFetch(registerURL(), {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
}

function* register({ user }) {
  try {
    yield call(sendRegister, user);
    yield put(registerSuccess());
    yield put(login(user.nick, user.password));
  } catch (e) {
    yield put(registerError());
  }
}

function* registerSaga() {
  yield takeLatest(REGISTER, register);
}

export default bootstrap([
  registerSaga,
]);
