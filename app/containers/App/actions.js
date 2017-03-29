/*
 *
 * App actions
 *
 */

import {
  GET_CURRENT_USER,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_TIME_SUCCESS,
} from './constants';

export function getCurrentUser() {
  return {
    type: GET_CURRENT_USER,
  };
}

export function getCurrentUserSuccess(user) {
  return {
    type: GET_CURRENT_USER_SUCCESS,
    user,
  };
}

export function getCurrentTimeSuccess(time) {
  return {
    type: GET_CURRENT_TIME_SUCCESS,
    time,
  };
}
