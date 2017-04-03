import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getProblemURL } from '../../urls';
import { bootstrap, fetchWithCredentials } from '../../utils/sagas';
import { makeSelectProblem } from '../App/selectors';
import { GET_PROBLEM } from './constants';
import { getProblemSuccess } from './actions';


function fetchProblem(contestId, problemId) {
  return fetchWithCredentials(getProblemURL(contestId, problemId), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => response.json());
}

function* getProblem({ contestId, problemId }) {
  const cachedProblem = yield select(makeSelectProblem(contestId, problemId));
  if (cachedProblem) return;

  const problem = yield call(fetchProblem, contestId, problemId);
  yield put(getProblemSuccess(contestId, problemId, problem));
}

function* getProblemSaga() {
  yield takeLatest(GET_PROBLEM, getProblem);
}

export default bootstrap([
  getProblemSaga,
]);
