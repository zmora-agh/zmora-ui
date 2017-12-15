import { takeLatest, call, put } from 'redux-saga/effects';
import { gql } from 'react-apollo';

import { bootstrap } from '../../utils/sagas';
import { CHANGE_PASSWORD } from './constants';
import { changePasswordError, changePasswordSuccess } from './actions';
import { client } from '../../graphql';

const ChangePasswordMutation = gql`
  mutation ChangePasswordMutation($oldPassword: String!, $newPassword: String!){
    changePassword(oldPassword: $oldPassword, newPassword: $newPassword)
  }
`;

function sendPasswordChange(oldPassword, newPassword) {
  return client.mutate({ mutation: ChangePasswordMutation, variables: { oldPassword, newPassword } });
}

function* changePassword({ oldPassword, newPassword }) {
  try {
    const response = yield call(sendPasswordChange, oldPassword, newPassword);
    yield put(response.data.changePassword === true ? changePasswordSuccess() : changePasswordError());
  } catch (e) {
    yield put(changePasswordError());
  }
}

function* changePasswordSaga() {
  yield takeLatest(CHANGE_PASSWORD, changePassword);
}

export default bootstrap([
  changePasswordSaga,
]);
