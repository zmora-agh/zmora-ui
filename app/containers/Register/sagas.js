import { takeLatest, call, put } from 'redux-saga/effects';
import { gql } from 'react-apollo';
import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';

import { setJwtToken } from '../../utils/auth';
import { bootstrap } from '../../utils/sagas';
import { registerError, registerSuccess } from './actions';
import { REGISTER } from './constants';
import { loginSuccess } from '../Login/actions';
import { client } from '../../graphql';
import { homePage } from '../../local-urls';

const RegisterMutation = gql`
  mutation RegisterMutation($nick: String!, $password: String!, $name: String!, $email: String!){
    register(nick: $nick, password: $password, name: $name, email: $email)
  }
`;

function sendRegister(user) {
  return client.mutate({ mutation: RegisterMutation, variables: user });
}

function* register({ user }) {
  try {
    const response = yield call(sendRegister, user);
    const token = response.data.register;
    const userInfo = jwtDecode(token);
    setJwtToken(token);
    yield put(registerSuccess());
    yield put(loginSuccess(userInfo));
    yield put(push(homePage()));
  } catch (e) {
    yield put(registerError());
  }
}

function* registerSaga() {
  yield takeLatest(REGISTER, register);
}

export default bootstrap([
  registerSaga,
]);
