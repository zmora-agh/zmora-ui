/*
 *
 * ProblemExamplesPage actions
 *
 */

import {
  GET_PROBLEM_EXAMPLES,
  GET_PROBLEM_EXAMPLES_SUCCESS,
} from './constants';

export function getProblemExamples(contestId, problemId) {
  return {
    type: GET_PROBLEM_EXAMPLES,
    contestId,
    problemId,
  };
}

export function getProblemExamplesSuccess(contestId, problemId, examples) {
  return {
    type: GET_PROBLEM_EXAMPLES_SUCCESS,
    contestId,
    problemId,
    examples,
  };
}
