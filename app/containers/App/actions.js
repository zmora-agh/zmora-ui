/*
 *
 * App actions
 *
 */

import {
  GET_CURRENT_TIME_SUCCESS,
} from './constants';

export function getCurrentTimeSuccess(time) {
  return {
    type: GET_CURRENT_TIME_SUCCESS,
    time,
  };
}
