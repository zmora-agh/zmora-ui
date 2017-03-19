/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_CURRENT_USER_SUCCESS,
} from './constants';

const initialState = fromJS({
  user: {
    name: '',
    nick: '',
    email: '',
    avatar: '',
  },
});

function contestsPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_USER_SUCCESS:
      return state.set('user', action.user);
    default:
      return state;
  }
}

export default contestsPageReducer;
