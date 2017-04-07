/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import { LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

const initialState = fromJS({});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.delete('error');
    case LOGIN_ERROR:
      return state.set('error', true);
    default:
      return state;
  }
}

export default loginReducer;
