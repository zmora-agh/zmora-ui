import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getContestURL } from '../../urls';
import { makeSelectContest } from '../App/selectors';
import { bootstrap } from '../../utils/sagas';
import { getContestSuccess } from './actions';
import { GET_CONTEST } from './constants';

function fetchContest(contestId) {
  return fetch(getContestURL(contestId), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => response.json());
}

function* getContest({ contestId }) {
  const cachedContest = yield select(makeSelectContest(contestId));
  if (cachedContest) return;

  const contests = yield call(fetchContest, contestId);
  yield put(getContestSuccess(contestId, contests));
}

function* getContestSaga() {
  yield takeLatest(GET_CONTEST, getContest);
}

export default bootstrap([
  getContestSaga,
]);
