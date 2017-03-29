import { takeLatest, call, put } from 'redux-saga/effects';
import { getProblemURL } from '../../urls';
import { bootstrap } from '../../utils/sagas';
import { GET_PROBLEM } from './constants';
import { getProblemSuccess } from './actions';

function fetchProblem(contestId, problemId) {
  return fetch(getProblemURL(contestId, problemId), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => response.json());
}

function* getProblem({ contestId, problemId }) {
  const problem = yield call(fetchProblem, contestId, problemId);
  yield put(getProblemSuccess(contestId, problemId, {
    shortcode: problem.shortcode,
    name: problem.problem.name,
    author: problem.problem.author,
    description: problem.problem.description,
  }));
}

function* getProblemSaga() {
  yield takeLatest(GET_PROBLEM, getProblem);
}

export default bootstrap([
  getProblemSaga,
]);
