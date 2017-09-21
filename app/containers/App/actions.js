/*
 *
 * App actions
 *
 */

import {
  CLEAR_FATAL_ERROR,
  GET_CURRENT_TIME_SUCCESS,
  LOGOUT,
  SET_FATAL_ERROR,
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

export function setFatalError() {
  return {
    type: SET_FATAL_ERROR,
  };
}

export function clearFatalError() {
  return {
    type: CLEAR_FATAL_ERROR,
  };
}
