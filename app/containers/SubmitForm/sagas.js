import { takeLatest, call, put } from 'redux-saga/effects';
import { getProblemSubmitsURL } from '../../urls';
import { bootstrap, fetchWithCredentials } from '../../utils/sagas';
import { submitSuccess, submitError } from './actions';
import { SUBMIT } from './constants';


function sendSubmit({ files, contestId, problemId }) {
  const formData = new FormData();
  Object.keys(files).map((file) => formData.append(file, files[file]));

  return fetchWithCredentials(getProblemSubmitsURL(contestId, problemId), {
    method: 'POST',
    body: formData,
  }, false).then((response) => response.json());
}

function* submit({ data }) {
  try {
    yield call(sendSubmit, data);
    yield put(submitSuccess());
  } catch (e) {
    console.warn(e);
    yield put(submitError());
  }
}

function* submitSaga() {
  yield takeLatest(SUBMIT, submit);
}

export default bootstrap([
  submitSaga,
]);
