/*
 *
 * App reducer
 *
 */

import { fromJS, Map, List } from 'immutable';
import moment from 'moment';

import { GET_CURRENT_TIME_SUCCESS } from './constants';
import { JOIN_CONTEST_SUCCESS } from '../ContestsPage/constants';
import { GET_PROBLEM_SUCCESS } from '../ProblemPage/constants';
import { GET_PROBLEM_EXAMPLES_SUCCESS } from '../ProblemExamplesPage/constants';
import { GET_PROBLEM_SUBMITS_SUCCESS } from '../ProblemSubmitsPage/constants';
import { GET_QUESTIONS_SUCCESS } from '../QuestionsPage/constants';
import { LOGIN_SUCCESS } from '../Login/constants';
import { GET_SUBMIT_DETAILS_SUCCESS } from '../SubmitDetails/constants';


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
  problems: {},
  submits: {},
  examples: {},
  users: {},
  contestsFetched: false,
});

const flattenProblem = ({ problem, ...meta }) => ({
  ...meta,
  ...problem,
});

const createSubmit = ({ date, ...rest }) => ({
  date: moment(date),
  ...rest,
});

const mapFromList = (list) => Map(list.map((el) => [el.get('id'), el]));

function contestsPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('user', fromJS(action.user));
    case GET_PROBLEM_SUCCESS:
      return state.setIn(['problems', action.problemId], fromJS(flattenProblem(action.problem)));

    case GET_PROBLEM_EXAMPLES_SUCCESS:
      return state.mergeIn(['examples'], mapFromList(fromJS(action.examples)))
        .setIn(['problems', action.problemId, 'examples'], List(action.examples.map((e) => e.id)));
    case GET_PROBLEM_SUBMITS_SUCCESS:
      return state.mergeDeepIn(['submits'], mapFromList(fromJS(action.submits.map(createSubmit))))
        .setIn(['problems', action.problemId, 'submits'], List(action.submits.map((submit) => submit.id)));

    case GET_SUBMIT_DETAILS_SUCCESS: {
      const submit = fromJS(createSubmit(action.submit));

      return state.setIn(['submits', action.submitId], submit)
        .mergeIn(['testsResults'], mapFromList(submit.get('tests')))
        .mergeIn(['submitFiles'], mapFromList(submit.get('files')))
        .setIn(['submits', action.submitId, 'tests'], submit.get('tests').map((t) => t.get('id')))
        .setIn(['submits', action.submitId, 'files'], submit.get('files').map((t) => t.get('id')));
    }
    case GET_QUESTIONS_SUCCESS:
      return state.setIn(['problems', action.problemId, 'questions'], fromJS(action.questions));
    case GET_CURRENT_TIME_SUCCESS: {
      const offset = action.time.diff(moment(), 'seconds');

      return state.set('time', fromJS({ offset }));
    }
    case JOIN_CONTEST_SUCCESS:
      return state.setIn(['contests', action.contestId, 'joined'], true);
    default:
      return state;
  }
}

export default contestsPageReducer;
