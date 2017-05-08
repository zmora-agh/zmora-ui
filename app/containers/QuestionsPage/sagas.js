import { call, put, takeLatest } from 'redux-saga/effects';
import { getProblemQustionsURL } from '../../urls';
import { bootstrap, fetchWithCredentials } from '../../utils/sagas';
import { getQuestionsSuccess } from './actions';
import { GET_QUESTIONS } from './constants';

function fetchQuestions(contestId, problemId) {
  return fetchWithCredentials(getProblemQustionsURL(contestId, problemId), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => response.json());
}

function* getQuestions({ contestId, problemId }) {
  const questions = yield call(fetchQuestions, contestId, problemId);
  yield put(getQuestionsSuccess(contestId, problemId, questions));
}

function* getQuestionsSaga() {
  yield takeLatest(GET_QUESTIONS, getQuestions);
}

export default bootstrap([
  getQuestionsSaga,
]);
