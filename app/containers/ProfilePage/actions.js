/*
 *
 * ProfilePage actions
 *
 */

import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
} from './constants';

export function changePassword(oldPassword, newPassword) {
  return {
    type: CHANGE_PASSWORD,
    oldPassword,
    newPassword,
  };
}

export function changePasswordSuccess() {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
  };
}

export function changePasswordError() {
  return {
    type: CHANGE_PASSWORD_ERROR,
  };
}

