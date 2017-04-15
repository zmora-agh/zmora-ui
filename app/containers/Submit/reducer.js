/*
 *
 * Submit reducer
 *
 */

import { fromJS } from 'immutable';

import { SUBMIT_MODAL_OPEN, SUBMIT_MODAL_CLOSE, SUBMIT_SET_CONTEXT } from './constants';

const initialState = fromJS({
  open: false,
});

function submitReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_MODAL_OPEN:
      return state.merge(fromJS({
        open: true,
        explicitContestId: action.contestId,
        explicitProblemId: action.problemId,
      }));
    case SUBMIT_MODAL_CLOSE:
      return state
        .set('open', false)
        // FIXME update ImmutableJS to version 4+ and replace .delete with .deleteAll
        .delete('explicitContestId')
        .delete('explicitProblemId');
    case SUBMIT_SET_CONTEXT:
      return state
        .merge(fromJS('contestId' in action ? { contextContestId: action.contestId } : {}))
        .merge(fromJS('problemId' in action ? { contextProblemId: action.problemId } : {}));
    default:
      return state;
  }
}

export default submitReducer;
