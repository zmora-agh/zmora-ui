/*
 *
 * ProblemSubmitsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_PROBLEM_SUBMITS_SUCCESS,
} from './constants';

const initialState = fromJS({
});

function problemSubmitsPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROBLEM_SUBMITS_SUCCESS:
      return state.set('submits', action.submits);
    default:
      return state;
  }
}

export default problemSubmitsPageReducer;
