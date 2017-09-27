import { takeLatest, call, put } from 'redux-saga/effects';
import { error } from 'react-notification-system-redux';

import { client } from '../../graphql';
import { getProblemSubmitsURL } from '../../urls';
import { bootstrap, fetchWithCredentials } from '../../utils/sagas';
import { ContestsListForLayout, ProblemsForSubmitModal } from './index';
import { submitSuccess, submitError, submitModalData } from './actions';
import { SUBMIT, SUBMIT_MODAL_OPEN, SUBMIT_MODAL_CHANGE_CONTEST } from './constants';

function sendSubmit({ files, contestId, problemId }) {
  if (!contestId || !problemId) {
    throw Error('Submit requires both contest and problem IDs.');
  }

  const formData = new FormData();
  Object.keys(files).map((file) => formData.append(file, files[file]));

  return fetchWithCredentials(getProblemSubmitsURL(contestId, problemId), {
    method: 'POST',
    body: formData,
  }, false);
}

function getModalSelectsData() {
  return client.query({ query: ContestsListForLayout });
}

function getProblems(contestId) {
  return client.query({ query: ProblemsForSubmitModal, variables: { contestId } });
}

const notificationOpts = {
  title: 'Upload failed',
  message: 'Sorry, something went wrong while uploading your submit',
  position: 'tr',
  autoDismiss: 10,
};

function* submit({ data }) {
  try {
    yield call(sendSubmit, data);
    yield put(submitSuccess(data.contestId, data.problemId));
  } catch (e) {
    yield put(error(notificationOpts));
    yield put(submitError());
  }
}

function* submitModalOpen() {
  const contests = yield call(getModalSelectsData);
  yield put(submitModalData(contests));
}

function* submitModalChangeContest({ contestId }) {
  const problems = yield call(getProblems, contestId);
  yield put(submitModalData(undefined, problems));
}

export function* submitSaga() {
  yield takeLatest(SUBMIT, submit);
  yield takeLatest(SUBMIT_MODAL_OPEN, submitModalOpen);
  yield takeLatest(SUBMIT_MODAL_CHANGE_CONTEST, submitModalChangeContest);
}

export default bootstrap([
  submitSaga,
]);
