/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

const initialState = fromJS({});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return initialState.set('loading', true);
    case LOGIN_SUCCESS:
      return initialState;
    case LOGIN_ERROR:
      return initialState.set('error', true);
    default:
      return state;
  }
}

export default loginReducer;
