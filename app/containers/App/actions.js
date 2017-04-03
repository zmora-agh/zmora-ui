/*
 *
 * App actions
 *
 */

import {
  GET_CURRENT_TIME_SUCCESS,
  LOGOUT,
} from './constants';

export function getCurrentTimeSuccess(time) {
  return {
    type: GET_CURRENT_TIME_SUCCESS,
    time,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
