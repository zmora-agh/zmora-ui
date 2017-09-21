/*
 *
 * ContestsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  JOIN_CONTEST_SUCCESS,
  JOIN_CONTEST_ERROR,
  CLOSE_JOIN_CONTEST_MODAL,
  OPEN_JOIN_CONTEST_MODAL,
  JOIN_CONTEST,
} from './constants';

const initialState = fromJS({
  dialog: {
    open: false,
    error: false,
    loading: false,
    contestId: null,
    contestName: '',
  },
});

function contestsPageReducer(state = initialState, action) {
  switch (action.type) {
    case JOIN_CONTEST:
    case JOIN_CONTEST_ERROR:
    case JOIN_CONTEST_SUCCESS:
    case OPEN_JOIN_CONTEST_MODAL:
    case CLOSE_JOIN_CONTEST_MODAL:
      return state.mergeDeepIn(['dialog'], fromJS(action.dialog));
    default:
      return state;
  }
}

export default contestsPageReducer;
