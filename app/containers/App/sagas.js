import { call, put, take } from 'redux-saga/effects';
import moment from 'moment';

import { getCurrentTimeURL } from '../../urls';
import { fetchWithCredentials } from '../../utils/sagas';
import { LOGIN_SUCCESS } from '../LoginForm/constants';

import { getCurrentTimeSuccess } from './actions';


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
    if (!sessionStorage.getItem('jwtToken')) yield take(LOGIN_SUCCESS);
    const time = yield call(fetchCurrentTime);
    yield put(getCurrentTimeSuccess(time));
    yield* sleep(5 * 60 * 1000);
  }
}

// All sagas to be loaded
export default [
  synchronizeTime,
];
