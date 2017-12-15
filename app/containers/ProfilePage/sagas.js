import { takeLatest, call, put } from 'redux-saga/effects';
import { gql } from 'react-apollo';
import { error, success } from 'react-notification-system-redux';

import { bootstrap } from '../../utils/sagas';
import { CHANGE_PASSWORD } from './constants';
import { changePasswordError, changePasswordSuccess } from './actions';
import { client } from '../../graphql';

const ChangePasswordMutation = gql`
  mutation ChangePasswordMutation($oldPassword: String!, $newPassword: String!){
    changePassword(oldPassword: $oldPassword, newPassword: $newPassword)
  }
`;

const notificationOptsError = {
  title: 'Password change failed',
  message: 'Sorry, your password has not been changed.',
  position: 'tr',
  autoDismiss: 10,
};

const notificationOptsSuccess = {
  title: 'Password change',
  message: 'Your password has been successfully changed.',
  position: 'tr',
  autoDismiss: 10,
};

function sendPasswordChange(oldPassword, newPassword) {
  return client.mutate({ mutation: ChangePasswordMutation, variables: { oldPassword, newPassword } });
}

function* changePassword({ oldPassword, newPassword }) {
  try {
    const response = yield call(sendPasswordChange, oldPassword, newPassword);
    if (response.data.changePassword === true) {
      yield put(success(notificationOptsSuccess));
      yield (put(changePasswordSuccess()));
    } else {
      yield put(error(notificationOptsError));
      yield (put(changePasswordError()));
    }
  } catch (e) {
    yield put(error(notificationOptsError));
    yield put(changePasswordError());
  }
}

function* changePasswordSaga() {
  yield takeLatest(CHANGE_PASSWORD, changePassword);
}

export default bootstrap([
  changePasswordSaga,
]);
