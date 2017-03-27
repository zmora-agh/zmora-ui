/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import moment from 'moment';
import {
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_TIME_SUCCESS,
} from './constants';

const initialState = fromJS({
  user: {
    name: '',
    nick: '',
    email: '',
    avatar: '',
  },
  time: {
    offset: 0,
  },
});

function contestsPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_USER_SUCCESS:
      return state.set('user', action.user);
    case GET_CURRENT_TIME_SUCCESS: {
      const offset = action.time.diff(moment(), 'seconds');

      return state.set('time', fromJS({ offset }));
    }
    default:
      return state;
  }
}

export default contestsPageReducer;
