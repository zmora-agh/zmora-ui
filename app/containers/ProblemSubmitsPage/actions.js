/*
 *
 * ProblemSubmitsPage actions
 *
 */

import {
  GET_PROBLEM_SUBMITS,
  GET_PROBLEM_SUBMITS_SUCCESS,
} from './constants';

export function getProblemSubmits(contestId, problemId) {
  return {
    type: GET_PROBLEM_SUBMITS,
    contestId,
    problemId,
  };
}

export function getProblemSubmitsSuccess(contestId, problemId, submits) {
  return {
    type: GET_PROBLEM_SUBMITS_SUCCESS,
    contestId,
    problemId,
    submits,
  };
}
