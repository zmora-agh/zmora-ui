/*
 *
 * Submit reducer
 *
 */

import { fromJS } from 'immutable';

import {
  SUBMIT,
  SUBMIT_SUCCESS,
  SUBMIT_ERROR,
  SUBMIT_MODAL_OPEN,
  SUBMIT_MODAL_CLOSE,
  SUBMIT_SET_CONTEXT,
  SUBMIT_MODAL_DATA,
  SUBMIT_MODAL_CHANGE_CONTEST,
} from './constants';

const initialState = fromJS({
  open: false,
  uploading: false,
});

function submitReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT:
      return state.set('uploading', true);
    case SUBMIT_SUCCESS:
      return state
        .set('open', false)
        .set('uploading', false);
    case SUBMIT_ERROR:
      return state.set('uploading', false);
    case SUBMIT_MODAL_OPEN:
      return state
        .merge(fromJS({
          open: true,
          explicitContestId: action.contestId,
          explicitProblemId: action.problemId,
        }));
    case SUBMIT_MODAL_CLOSE:
      return state.set('open', false);
      /*
       * We deliberately don't clean up explicit ID variables, as .delete in SUBMIT_MODAL_CLOSE would trigger UI update
       * to context defaults (just before dialog disappearance), which looks really weird.
       * This is not harmful, as these variables would be overwritten when new modal is open (which is fine).
       */
    case SUBMIT_SET_CONTEXT:
      return state
        .merge(fromJS('contestId' in action ? { contextContestId: action.contestId } : {}))
        .merge(fromJS('problemId' in action ? { contextProblemId: action.problemId } : {}));
    case SUBMIT_MODAL_DATA:
      return state
        .merge(fromJS(action.contests ? { contests: action.contests } : {}))
        .merge(fromJS(action.problems ? { problems: action.problems } : {}));
    case SUBMIT_MODAL_CHANGE_CONTEST:
      return state.merge(fromJS({ explicitContestId: action.contestId }));
    default:
      return state;
  }
}

export default submitReducer;
