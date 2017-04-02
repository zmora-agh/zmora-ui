/*
 *
 * LoginForm actions
 *
 */

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export function login(nick, password) {
  return {
    type: LOGIN,
    credentials: {
      nick,
      password,
    },
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function loginError() {
  return {
    type: LOGIN_ERROR,
  };
}
