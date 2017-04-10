/*
 *
 * Register reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  REGISTER,
} from './constants';

const initialState = fromJS({
  error: false,
  loading: false,
});

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return state.merge({ error: false, loading: false });
    case REGISTER_ERROR:
      return state.merge({ error: true, loading: false });
    case REGISTER:
      return state.set('loading', true);
    default:
      return state;
  }
}

export default registerReducer;
