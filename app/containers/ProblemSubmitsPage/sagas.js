import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getProblemSubmitsURL } from '../../urls';
import { bootstrap } from '../../utils/sagas';
import { makeSelectProblemSubmits } from '../App/selectors';
import { GET_PROBLEM_SUBMITS } from './constants';
import { getProblemSubmitsSuccess } from './actions';

function fetchProblemSubmits(contestId, problemId) {
  return fetch(getProblemSubmitsURL(contestId, problemId), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => response.json());
}

function* getProblemSubmits({ contestId, problemId }) {
  const cachedSubmits = yield select(makeSelectProblemSubmits(contestId, problemId));
  if (cachedSubmits) {
    yield put(getProblemSubmitsSuccess(contestId, problemId, cachedSubmits));
    return;
  }
  const submits = yield call(fetchProblemSubmits, contestId, problemId);
  yield put(getProblemSubmitsSuccess(contestId, problemId, submits));
}

function* getProblemSubmitsSaga() {
  yield takeLatest(GET_PROBLEM_SUBMITS, getProblemSubmits);
}

export default bootstrap([
  getProblemSubmitsSaga,
]);
