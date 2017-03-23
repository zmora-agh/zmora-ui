/*
 *
 * ContestsPage actions
 *
 */

import {
  GET_CONTESTS,
  GET_CONTESTS_SUCCESS
} from './constants';

export function getContests() {
  return {
    type: GET_CONTESTS,
  };
}

export function getContestsSuccess(contests) {
  return {
    type: GET_CONTESTS_SUCCESS,
    contests,
  };
}
