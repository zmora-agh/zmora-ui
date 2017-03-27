/*
 *
 * App reducer
 *
 */

import { fromJS, Map } from 'immutable';
import moment from 'moment';
import {
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_TIME_SUCCESS,
} from './constants';
import {
  GET_CONTESTS_SUCCESS,
} from '../ContestsPage/constants';

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
});

function contestsPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_USER_SUCCESS:
      return state.set('user', action.user);
    case GET_CONTESTS_SUCCESS: {
      const contestsMap = fromJS(action.contests).reduce((result, contest) => result.set(contest.get('id'), contest), Map());
      return state.mergeDeep({ contests: contestsMap });
    }
    case GET_CURRENT_TIME_SUCCESS: {
      const offset = action.time.diff(moment(), 'seconds');

      return state.set('time', fromJS({ offset }));
    }
    default:
      return state;
  }
}

export default contestsPageReducer;
