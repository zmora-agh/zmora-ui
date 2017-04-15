import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getProblemsURL } from '../../urls';
import { makeSelectProblems } from '../App/selectors';
import { bootstrap, fetchWithCredentials } from '../../utils/sagas';
import { getProblemsSuccess } from './actions';
import { GET_PROBLEMS } from './constants';

function fetchProblems(contestId) {
  return fetchWithCredentials(getProblemsURL(contestId), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => response.json());
}

function* getProblems({ contestId }) {
  const cachedProblems = yield select(makeSelectProblems(contestId));
  if (cachedProblems) return;

  // FIXME remove on API update
  const mock = (problems) => problems.map((problem) => Object.assign(problem, {
    points: 50,
    category: problem.problem.name,
    deadline: '5 September 1666',
  }));
  const problems = yield call(fetchProblems, contestId);
  yield put(getProblemsSuccess(contestId, mock(problems)));
}

function* getProblemsSaga() {
  yield takeLatest(GET_PROBLEMS, getProblems);
}

export default bootstrap([
  getProblemsSaga,
]);
