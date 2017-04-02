import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getContestsURL } from '../../urls';
import { makeSelectContests } from '../App/selectors';
import { bootstrap, fetchWithCredentials } from '../../utils/sagas';
import { getContestsSuccess } from './actions';
import { GET_CONTESTS } from './constants';

function fetchContests() {
  return fetchWithCredentials(getContestsURL(), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => response.json());
}

function* getContests() {
  const cachedContests = yield select(makeSelectContests());
  if (cachedContests) return;

  const contests = yield call(fetchContests);
  yield put(getContestsSuccess(contests));
}

function* getContestsSaga() {
  yield takeLatest(GET_CONTESTS, getContests);
}

export default bootstrap([
  getContestsSaga,
]);
