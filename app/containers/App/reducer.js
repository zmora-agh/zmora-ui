/*
 *
 * App reducer
 *
 */

import { fromJS, Map } from 'immutable';
import moment from 'moment';
import { GET_CURRENT_TIME_SUCCESS } from './constants';
import { GET_CONTEST_SUCCESS } from '../ContestPage/constants';
import { GET_CONTESTS_SUCCESS } from '../ContestsPage/constants';
import { GET_PROBLEM_SUCCESS } from '../ProblemViewPage/constants';
import { GET_PROBLEM_EXAMPLES_SUCCESS } from '../ProblemExamplesPage/constants';
import { GET_PROBLEM_SUBMITS_SUCCESS } from '../ProblemSubmitsPage/constants';
import { LOGIN_SUCCESS } from '../LoginForm/constants';

const initialState = fromJS({
  user: {
    name: '',
    nick: '',
    email: '',
    avatar: '',
  },
  time: {
    offset: 0,
  },
  contests: {},
  contestsFetched: false,
});

function contestsPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('user', fromJS(action.user));
    case GET_CONTEST_SUCCESS:
      return state.mergeIn(['contests', action.contestId], fromJS(action.contest));
    case GET_CONTESTS_SUCCESS: {
      const contestsMap = fromJS(action.contests)
        .reduce((result, contest) => result.set(contest.get('id'), contest), Map());
      return state.mergeDeep({
        contests: contestsMap,
        contestsFetched: true,
      });
    }
    case GET_PROBLEM_SUCCESS:
      return state.mergeIn(['contests', action.contestId, 'problems'],
        Map([[action.problemId, fromJS(action.problem)]]));
    case GET_PROBLEM_EXAMPLES_SUCCESS:
      return state.setIn(['contests', action.contestId, 'problems', action.problemId, 'examples'],
        fromJS(action.examples));
    case GET_PROBLEM_SUBMITS_SUCCESS:
      return state.setIn(['contests', action.contestId, 'problems', action.problemId, 'submits'],
        fromJS(action.submits));
    case GET_CURRENT_TIME_SUCCESS: {
      const offset = action.time.diff(moment(), 'seconds');

      return state.set('time', fromJS({ offset }));
    }
    default:
      return state;
  }
}

export default contestsPageReducer;
