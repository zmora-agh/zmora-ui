/*
 *
 * ProblemViewPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_PROBLEM_SUCCESS,
} from './constants';

const initialState = fromJS({
  problem: {
    problem: {
      name: '',
      description: '',
    },
  },
});

function problemViewPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROBLEM_SUCCESS:
      return state.set('problem', action.problem);
    default:
      return state;
  }
}

export default problemViewPageReducer;
