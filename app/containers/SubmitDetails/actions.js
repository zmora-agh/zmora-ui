/*
 *
 * SubmitDetailsModal actions
 *
 */

import {
  GET_SUBMIT_DETAILS,
  GET_SUBMIT_DETAILS_SUCCESS,
} from './constants';

export function getSubmitDetails(contestId, problemId, submitId) {
  return {
    type: GET_SUBMIT_DETAILS,
    contestId,
    problemId,
    submitId,
  };
}

export function getSubmitDetailsSuccess(submitDetails, contestId, problemId, submitId) {
  return {
    type: GET_SUBMIT_DETAILS_SUCCESS,
    contestId,
    problemId,
    submitId,
    submit: submitDetails,
  };
}
