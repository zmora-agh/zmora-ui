/*
 *
 * ProblemViewPage actions
 *
 */

import {
  GET_PROBLEM,
  GET_PROBLEM_SUCCESS,
} from './constants';

export function getProblem(contestId, problemId) {
  return {
    type: GET_PROBLEM,
    contestId,
    problemId,
  };
}

export function getProblemSuccess(problem) {
  return {
    type: GET_PROBLEM_SUCCESS,
    problem,
  };
}
