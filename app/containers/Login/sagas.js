import { takeLatest, call, put } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';
import { push } from 'react-router-redux';
import { gql } from 'react-apollo';


import { bootstrap } from '../../utils/sagas';
import { setJwtToken } from '../../utils/auth';
import { loginError, loginSuccess } from './actions';
import { LOGIN } from './constants';
import { homePage } from '../../local-urls';
import { client } from '../../graphql';

const LoginMutation = gql`
  mutation LoginMutation($nick: String!, $password: String!){
   getJwtToken(nick: $nick, password: $password)
  }
`;

function sendLogin(credentials) {
  return client.mutate({ mutation: LoginMutation, variables: credentials });
}

function* login({ credentials, from = homePage() }) {
  try {
    const response = yield call(sendLogin, credentials);
    const token = response.data.getJwtToken;
    const userInfo = jwtDecode(token);
    setJwtToken(token);
    yield put(loginSuccess(userInfo));
    yield put(push(from));
  } catch (e) {
    yield put(loginError());
  }
}

function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

export default bootstrap([
  loginSaga,
]);
