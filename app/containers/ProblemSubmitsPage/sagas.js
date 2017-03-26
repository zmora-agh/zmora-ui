import { takeLatest, call, put } from 'redux-saga/effects';
import { getProblemSubmitsURL } from '../../urls';
import { bootstrap } from '../../utils/sagas';
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
  const problem = yield call(fetchProblemSubmits, contestId, problemId);
  yield put(getProblemSubmitsSuccess(problem));
}

function* getProblemSubmitsSaga() {
  yield takeLatest(GET_PROBLEM_SUBMITS, getProblemSubmits);
}

export default bootstrap([
  getProblemSubmitsSaga,
]);
