import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getContestsURL, joinContestUrl } from '../../urls';
import { makeSelectContests } from '../App/selectors';
import { bootstrap, fetchWithCredentials } from '../../utils/sagas';
import { getContestsSuccess, joinContestSuccess, joinContestError } from './actions';
import { GET_CONTESTS, JOIN_CONTEST } from './constants';

function fetchContests() {
  return fetchWithCredentials(getContestsURL(), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => response.json());
}

function sendJoinContest(contestId, password) {
  return fetchWithCredentials(joinContestUrl(contestId), {
    method: 'POST',
    body: JSON.stringify(password),
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

function* joinContest({ contestId, password }) {
  try {
    yield call(sendJoinContest, contestId, password);
    yield put(joinContestSuccess(contestId));
  } catch (e) {
    yield put(joinContestError());
  }
}
function* getContestsSaga() {
  yield takeLatest(GET_CONTESTS, getContests);
}

function* joinContestSaga() {
  yield takeLatest(JOIN_CONTEST, joinContest);
}

export default bootstrap([
  getContestsSaga,
  joinContestSaga,
]);
