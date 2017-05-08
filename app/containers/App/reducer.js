/*
 *
 * App reducer
 *
 */

import { fromJS, Map, List } from 'immutable';
import moment from 'moment';
import { pickBy } from 'lodash';

import { GET_CURRENT_TIME_SUCCESS } from './constants';
import { GET_CONTEST_SUCCESS } from '../ContestPage/constants';
import { GET_CONTESTS_SUCCESS, JOIN_CONTEST_SUCCESS } from '../ContestsPage/constants';
import { GET_PROBLEMS_SUCCESS } from '../ProblemsPage/constants';
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
  contestsFetched: false,
});

const stripIdProperty = (entity) => pickBy(entity, (value, key) => key !== 'id');

const flattenProblem = ({ problem, ...meta }) => ({
  ...meta,
  ...problem,
});

const createContest = (contest) => stripIdProperty(contest);

const createSubmit = ({ date, ...rest }) => ({
  date: moment(date),
  ...rest,
});

const mapFromList = (list) => Map(list.map((el) => {
  const { id, ...other } = el.toJS();
  return [id, { id, ...other }];
}));

function contestsPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('user', fromJS(action.user));
    case GET_CONTEST_SUCCESS:
      return state.mergeIn(['contests', action.contestId], fromJS(createContest(action.contest)));
    case GET_CONTESTS_SUCCESS: {
      const contestsMap = fromJS(action.contests)
        .reduce((result, contest) => result.set(contest.get('id'), createContest(contest)), Map());
      return state.mergeDeep({
        contests: contestsMap,
        contestsFetched: true,
      });
    }
    case GET_PROBLEMS_SUCCESS:
      /* Merging empty Map with state.mergeDeepIn() does not create empty Map inside tree, so we have to handle this
       * special case manually: */
      return (action.problems.length === 0 ?
        // case 1) – explicitly emplace empty Map inside
        state.setIn(['contests', action.contestId, 'problems'], fromJS({})) :
        // case 2) – just merge, as there is something to merge
        state.mergeDeepIn(['contests', action.contestId, 'problems'],
          Map(action.problems.map((problem) => [problem.id, fromJS(flattenProblem(problem))]))))
      // ...after all, set fetched flag
        .setIn(['contests', action.contestId, 'fetched'], true);
    case GET_PROBLEM_SUCCESS:
      return state.mergeIn(['contests', action.contestId, 'problems'],
        Map([[action.problemId, fromJS(flattenProblem(action.problem))]]));
    case GET_PROBLEM_EXAMPLES_SUCCESS:
      return state.setIn(['contests', action.contestId, 'problems', action.problemId, 'examples'],
        fromJS(action.examples));
    case GET_PROBLEM_SUBMITS_SUCCESS: {
      if (action.submits.length === 0) {
        return state.setIn(['contests', action.contestId, 'problems', action.problemId, 'submits'], fromJS({}));
      }

      return state.mergeDeepIn(['submits'],
        Map(action.submits.map((submit) => [submit.id, fromJS(createSubmit(submit))])))
        .setIn(['contests', action.contestId, 'problems', action.problemId, 'submits'],
          List(action.submits.map((submit) => submit.id)));
    }
    case GET_SUBMIT_DETAILS_SUCCESS: {
      const submit = fromJS(createSubmit(action.submit));

      return state.setIn(['submits', action.submitId], submit)
        .mergeIn(['testsResults'], mapFromList(submit.get('tests')))
        .mergeIn(['submitFiles'], mapFromList(submit.get('files')))
        .setIn(['submits', action.submitId, 'tests'], submit.get('tests').map((t) => t.get('id')))
        .setIn(['submits', action.submitId, 'files'], submit.get('files').map((t) => t.get('id')));
    }
    case GET_QUESTIONS_SUCCESS:
      return state.setIn(['contests', action.contestId, 'problems', action.problemId, 'questions'],
        fromJS(action.questions));
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
