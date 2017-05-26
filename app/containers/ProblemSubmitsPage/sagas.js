import { call, takeLatest } from 'redux-saga/effects';
import { client } from '../../graphql';
import { bootstrap } from '../../utils/sagas';
import { SUBMIT_SUCCESS } from '../Submit/constants';
import { ProblemSubmitsForLayout } from './index';

function updateSubmits(problemId) {
  return client.query({ query: ProblemSubmitsForLayout, variables: { problemId }, fetchPolicy: 'network-only' });
}

function* handleSubmitSuccess({ problemId }) {
  yield call(updateSubmits, problemId);
}

export function* problemSubmitsSaga() {
  yield takeLatest(SUBMIT_SUCCESS, handleSubmitSuccess);
}

export default bootstrap([
  problemSubmitsSaga,
]);
