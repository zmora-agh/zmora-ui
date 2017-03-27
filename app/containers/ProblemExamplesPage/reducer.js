/*
 *
 * ProblemExamplesPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_PROBLEM_EXAMPLES_SUCCESS,
} from './constants';

const initialState = fromJS({
  problemExamples: [],
});

function problemExampleDataPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROBLEM_EXAMPLES_SUCCESS:
      return state.set('problemExamples', action.problemExamples);
    default:
      return state;
  }
}

export default problemExampleDataPageReducer;
