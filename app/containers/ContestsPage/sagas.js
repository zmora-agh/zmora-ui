import { takeLatest, call, put } from 'redux-saga/effects';
import { getContestsURL } from '../../urls';
import { bootstrap } from '../../utils/sagas';
import { getContestsSuccess } from './actions';
import { GET_CONTESTS } from './constants';

function fetchContests() {
  return fetch(getContestsURL(), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => response.json());
}

function* getContests() {
  const contests = yield call(fetchContests);
  yield put(getContestsSuccess(contests));
}

function* getContestsSaga() {
  yield takeLatest(GET_CONTESTS, getContests);
}

export default bootstrap([
  getContestsSaga,
]);
