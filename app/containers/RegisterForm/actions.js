/*
 *
 * RegisterForm actions
 *
 */

import {
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from './constants';

export function register(nick, name, about, email, password) {
  return {
    type: REGISTER,
    user: {
      nick,
      name,
      about,
      email,
      password,
    },
  };
}

export function registerError() {
  return {
    type: REGISTER_ERROR,
  };
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS,
  };
}
