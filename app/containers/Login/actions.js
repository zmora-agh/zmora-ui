/*
 *
 * Login actions
 *
 */

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export function login(nick, password, from) {
  return {
    type: LOGIN,
    credentials: {
      nick,
      password,
    },
    from,
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
