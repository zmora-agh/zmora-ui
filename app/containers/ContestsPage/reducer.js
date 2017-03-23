/*
 *
 * ContestsPage reducer
 *
 */

import { fromJS } from 'immutable';
import { GET_CONTESTS_SUCCESS } from './constants';

const initialState = fromJS({
  contests: [
  ],
});

function contestsPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTESTS_SUCCESS:
      return state.set('contests', action.contests);
    default:
      return state;
  }
}

export default contestsPageReducer;
