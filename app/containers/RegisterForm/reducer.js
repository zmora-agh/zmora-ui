/*
 *
 * RegisterForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from './constants';

const initialState = fromJS({ error: undefined });

function registerFormReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return state.set('error', false);
    case REGISTER_ERROR:
      return state.set('error', true);
    default:
      return state;
  }
}

export default registerFormReducer;
