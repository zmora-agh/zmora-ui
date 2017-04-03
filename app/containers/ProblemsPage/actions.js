/*
 *
 * ProblemsPage actions
 *
 */

import {
  GET_PROBLEMS,
  GET_PROBLEMS_SUCCESS,
} from './constants';

export function getProblems(contestId) {
  return {
    type: GET_PROBLEMS,
    contestId,
  };
}

export function getProblemsSuccess(contestId, problems) {
  return {
    type: GET_PROBLEMS_SUCCESS,
    contestId,
    problems,
  };
}
