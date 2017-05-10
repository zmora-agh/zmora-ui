import { takeLatest, call, put, select } from 'redux-saga/effects';
import { bootstrap, fetchWithCredentials } from '../../utils/sagas';
import { getSubmitDetailsURL } from '../../urls';
import { makeSelectSubmitDetails } from '../App/selectors';
import { getSubmitDetailsSuccess } from './actions';
import { GET_SUBMIT_DETAILS } from './constants';

function fetchSubmitDetails(contestId, problemId, submitId) {
  return fetchWithCredentials(getSubmitDetailsURL(contestId, problemId, submitId), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => response.json());
}

function* getSubmitDetails({ contestId, problemId, submitId }) {
  const cachedDetails = yield select(makeSelectSubmitDetails(submitId));
  if (cachedDetails && cachedDetails.files && cachedDetails.tests) return;

  const details = yield call(fetchSubmitDetails, contestId, problemId, submitId);
  yield put(getSubmitDetailsSuccess(details, contestId, problemId, submitId));
}

function* getSubmitDetailsSaga() {
  yield takeLatest(GET_SUBMIT_DETAILS, getSubmitDetails);
}

export default bootstrap([
  getSubmitDetailsSaga,
]);
