import { fromJS } from 'immutable';
import { CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_ERROR } from './constants';

const initialState = fromJS({});

function changePasswordReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PASSWORD:
      return initialState.set('loading', true);
    case CHANGE_PASSWORD_SUCCESS:
      return initialState;
    case CHANGE_PASSWORD_ERROR:
      return initialState.set('error', true);
    default:
      return state;
  }
}

export default changePasswordReducer;
