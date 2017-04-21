/*
 *
 * Submit actions
 *
 */

import {
  SUBMIT,
  SUBMIT_ERROR,
  SUBMIT_SUCCESS,
  SUBMIT_MODAL_OPEN,
  SUBMIT_MODAL_CLOSE,
  SUBMIT_SET_CONTEXT,
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

export function submitModalOpen(contestId, problemId) {
  return {
    type: SUBMIT_MODAL_OPEN,
    contestId,
    problemId,
  };
}

export function submitModalClose() {
  return {
    type: SUBMIT_MODAL_CLOSE,
  };
}

export function submitSetContext(context) {
  return {
    type: SUBMIT_SET_CONTEXT,
    ...context,
  };
}

