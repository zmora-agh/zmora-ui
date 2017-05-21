import { takeLatest, call, put } from 'redux-saga/effects';
import { gql } from 'react-apollo';
import { client } from '../../graphql';
import { bootstrap } from '../../utils/sagas';
import { joinContestSuccess, joinContestError } from './actions';
import { JOIN_CONTEST } from './constants';

const JoinContestMutation = gql`
  mutation JoinContestMutation($id: ID!, $password: String!) {
    joinContest(id: $id, password: $password) {
      id
      joined
    }
  }
`;

function sendJoinContest(contestId, password) {
  return client.mutate({ mutation: JoinContestMutation, variables: { id: contestId, password } });
}

function* joinContest({ contestId, password }) {
  try {
    const response = yield call(sendJoinContest, contestId, password);
    yield put(response.data.joinContest.joined === true ? joinContestSuccess(contestId) : joinContestError());
  } catch (e) {
    yield put(joinContestError());
  }
}

function* joinContestSaga() {
  yield takeLatest(JOIN_CONTEST, joinContest);
}

export default bootstrap([
  joinContestSaga,
]);
