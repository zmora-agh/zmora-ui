/*
 *
 * AuthPage reducer
 *
 */

import { combineReducers } from 'redux';

import loginReducer from '../Login/reducer';
import registerReducer from '../Register/reducer';

const authReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
});

export default authReducer;
