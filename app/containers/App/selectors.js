import { createSelector } from 'reselect';

// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectAppDomain = () => (state) => state.get('app');
const selcttTestsResultsDomain = () => (state) => state.get('app').get('testsResults');
const selectUiDomain = () => (state) => state.get('ui');

const makeSelectApp = () => createSelector(
  selectAppDomain(),
  (app) => app.toJS()
);

const makeSelectUi = () => createSelector(
  selectUiDomain(),
  (ui) => ui.toJS()
);

const makeSelectUser = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('user').toJS()
);

const makeSelectContest = (contestId) => createSelector(
  selectAppDomain(),
  (substate) => {
    const contest = substate.getIn(['contests', contestId]);
    return contest ? contest.toJS() : undefined;
  }
);

const makeSelectContests = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('contestsFetched') ? substate.get('contests').toJS() : undefined
);

const makeSelectTime = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('time').toJS()
);

const makeSelectProblems = (contestId) => createSelector(
  selectAppDomain(),
  (substate) => substate.getIn(['contests', contestId, 'fetched']) ?
    substate.getIn(['contests', contestId, 'problems']).toJS() :
    undefined
);

const makeSelectProblem = (contestId, problemId) => createSelector(
  selectAppDomain(),
  (substate) => {
    const problem = substate.getIn(['contests', contestId, 'problems', problemId]);
    return problem ? problem.toJS() : undefined;
  }
);

const makeSelectProblemExamples = (contestId, problemId) => createSelector(
  selectAppDomain(),
  (substate) => {
    const examples = substate.getIn(['contests', contestId, 'problems', problemId, 'examples']);
    return examples ? examples.toJS() : undefined;
  }
);

const makeSelectProblemSubmits = (contestId, problemId) => createSelector(
  selectAppDomain(),
  (substate) => {
    const submits = substate.getIn(['contests', contestId, 'problems', problemId, 'submits']);
    return submits ? submits.toJS() : undefined;
  }
);

const makeSelectSubmitDetails = (contestId, problemId, submitId) => createSelector(
  selectAppDomain(),
  selcttTestsResultsDomain(),
  (substate, testsResults) => {
    const submit = substate.getIn(['contests', contestId, 'problems', problemId, 'submits', submitId]);

    if (submit && submit.has('tests') && testsResults) {
      return submit.set('tests', submit.get('tests').map((id) => testsResults.get(id))).toJS();
    }
    return undefined;
  }
);

const makeSelectProblemQuestions = (contestId, problemId) => createSelector(
  selectAppDomain(),
  (substate) => {
    const questions = substate.getIn(['contests', contestId, 'problems', problemId, 'questions']);
    return questions ? questions.toJS() : undefined;
  }
);

export {
  makeSelectApp,
  makeSelectUi,
  makeSelectUser,
  makeSelectLocationState,
  makeSelectContest,
  makeSelectContests,
  makeSelectTime,
  makeSelectProblems,
  makeSelectProblem,
  makeSelectProblemExamples,
  makeSelectProblemSubmits,
  makeSelectSubmitDetails,
  makeSelectProblemQuestions,
};
