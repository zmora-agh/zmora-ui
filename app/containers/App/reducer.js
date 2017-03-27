/*
 *
 * App reducer
 *
 */

import { fromJS, Map } from 'immutable';
import {
  GET_CURRENT_USER_SUCCESS,
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
  contests: {},
});

function contestsPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_USER_SUCCESS:
      return state.set('user', action.user);
    case GET_CONTESTS_SUCCESS:
      return state.mergeDeep({ contests: Map(action.contests.map((contest) => [contest.id, contest])) });
    default:
      return state;
  }
}

export default contestsPageReducer;
