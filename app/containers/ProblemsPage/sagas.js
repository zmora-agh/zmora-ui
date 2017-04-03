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

  const problems = yield call(fetchProblems, contestId);
  yield put(getProblemsSuccess(contestId, problems));
}

function* getProblemsSaga() {
  yield takeLatest(GET_PROBLEMS, getProblems);
}

export default bootstrap([
  getProblemsSaga,
]);
