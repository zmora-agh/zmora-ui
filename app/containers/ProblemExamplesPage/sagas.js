import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getProblemExamplesURL } from '../../urls';
import { bootstrap } from '../../utils/sagas';
import { GET_PROBLEM_EXAMPLES } from './constants';
import { getProblemExamplesSuccess } from './actions';
import { makeSelectProblemExamples } from '../App/selectors';

function fetchProblemExamples(contestId, problemId) {
  return fetch(getProblemExamplesURL(contestId, problemId), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => response.json());
}

function* getProblemExamples({ contestId, problemId }) {
  const cachedExample = yield select(makeSelectProblemExamples(contestId, problemId));
  if (cachedExample) return;

  const examples = yield call(fetchProblemExamples, contestId, problemId);
  yield put(getProblemExamplesSuccess(contestId, problemId, examples));
}

function* getProblemExamplesSaga() {
  yield takeLatest(GET_PROBLEM_EXAMPLES, getProblemExamples);
}

// All sagas to be loaded
export default bootstrap([
  getProblemExamplesSaga,
]);
