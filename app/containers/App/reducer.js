/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import moment from 'moment';

import { CLEAR_FATAL_ERROR, GET_CURRENT_TIME_SUCCESS, SET_FATAL_ERROR } from './constants';
import { JOIN_CONTEST_SUCCESS } from '../ContestsPage/constants';
import { LOGIN_SUCCESS } from '../Login/constants';

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
  contests: {},
  problems: {},
  submits: {},
  examples: {},
  users: {},
  contestsFetched: false,
  fatalError: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('user', fromJS(action.user));
    case GET_CURRENT_TIME_SUCCESS: {
      const offset = action.time.diff(moment(), 'seconds');

      return state.set('time', fromJS({ offset }));
    }
    case JOIN_CONTEST_SUCCESS:
      return state.setIn(['contests', action.contestId, 'joined'], true);
    case SET_FATAL_ERROR:
      return state.set('fatalError', true);
    case CLEAR_FATAL_ERROR:
      return state.set('fatalError', false);
    default:
      return state;
  }
}

export default appReducer;
