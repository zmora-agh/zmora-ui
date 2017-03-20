/*
 *
 * App actions
 *
 */

import {
  GET_CURRENT_USER,
  GET_CURRENT_USER_SUCCESS,
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
