/*
 *
 * SubmitForm actions
 *
 */

import {
  SUBMIT,
  SUBMIT_ERROR,
  SUBMIT_SUCCESS,
} from './constants';

export function submit(files, contestId, problemId) {
  return {
    type: SUBMIT,
    data: {
      files,
      contestId,
      problemId,
    },
  };
}

export function submitSuccess() {
  return {
    type: SUBMIT_SUCCESS,
  };
}

export function submitError() {
  return {
    type: SUBMIT_ERROR,
  };
}
