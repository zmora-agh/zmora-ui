/*
 *
 * ContestPage actions
 *
 */

import {
  GET_CONTEST,
  GET_CONTEST_SUCCESS,
} from './constants';

export function getContest(contestId) {
  return {
    type: GET_CONTEST,
    contestId,
  };
}

export function getContestSuccess(contestId, contest) {
  return {
    type: GET_CONTEST_SUCCESS,
    contestId,
    contest,
  };
}
