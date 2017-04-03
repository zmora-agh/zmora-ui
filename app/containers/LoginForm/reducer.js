/*
 *
 * LoginForm reducer
 *
 */

import { fromJS } from 'immutable';
import { LOGIN_ERROR } from './constants';


const initialState = fromJS({ error: false });

function loginFormReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ERROR:
      return state.set('error', true);
    default:
      return state;
  }
}

export default loginFormReducer;
