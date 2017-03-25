/*
 *
 * ProblemExampleDataPage actions
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

export function getProblemExamplesSuccess(problemExamples) {
  return {
    type: GET_PROBLEM_EXAMPLES_SUCCESS,
    problemExamples,
  };
}
