import { takeLatest, call, put } from 'redux-saga/effects';
import { joinContestUrl } from '../../urls';
import { bootstrap, fetchWithCredentials } from '../../utils/sagas';
import { joinContestSuccess, joinContestError } from './actions';
import { JOIN_CONTEST } from './constants';

function sendJoinContest(contestId, password) {
  return fetchWithCredentials(joinContestUrl(contestId), {
    method: 'POST',
    body: JSON.stringify(password),
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => response.json());
}

function* joinContest({ contestId, password }) {
  try {
    yield call(sendJoinContest, contestId, password);
    yield put(joinContestSuccess(contestId));
  } catch (e) {
    yield put(joinContestError());
  }
}

function* joinContestSaga() {
  yield takeLatest(JOIN_CONTEST, joinContest);
}

export default bootstrap([
  joinContestSaga,
]);
