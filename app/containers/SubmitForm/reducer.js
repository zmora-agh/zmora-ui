/*
 *
 * SubmitForm reducer
 *
 */

import { fromJS } from 'immutable';

const initialState = fromJS({});

function submitFormReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default submitFormReducer;
