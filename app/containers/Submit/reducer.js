/*
 *
 * SubmitForm reducer
 *
 */

import { fromJS } from 'immutable';

import { SUBMIT_MODAL_OPEN, SUBMIT_MODAL_CLOSE } from './constants';

const initialState = fromJS({
  open: false,
});

function submitFormReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_MODAL_OPEN:
      return state.merge(fromJS({
        open: true,
        contestId: action.contestId,
        problemId: action.problemId,
      }));
    case SUBMIT_MODAL_CLOSE:
      return state.set('open', false);
    default:
      return state;
  }
}

export default submitFormReducer;
