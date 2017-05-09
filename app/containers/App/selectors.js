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
const selectContestDomain = (contestId) => (state) => state.getIn(['app', 'contests', contestId]);
const selectProblemsDomain = () => (state) => state.getIn(['app', 'problems']);
const selectProblemDomain = (problemId) => (state) => state.getIn(['app', 'problems', problemId]);
const selectSubmitsDomain = () => (state) => state.get('app').get('submits');
const selectSubmitDomain = (submitId) => (state) => state.getIn(['app', 'submits', submitId]);
const selectTestsResultsDomain = () => (state) => state.get('app').get('testsResults');
const selectSubmitFilesDomain = () => (state) => state.get('app').get('submitFiles');
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
  selectContestDomain(contestId),
  selectProblemsDomain(),
  (contest, problems) => {
    if (problems && contest && contest.has('problems')) {
      return contest.get('problems').map((id) => problems.get(id)).toJS();
    }

    return undefined;
  }
);

const makeSelectProblem = (problemId) => createSelector(
  selectProblemDomain(problemId),
  (problem) => problem ? problem.toJS() : undefined
);

const makeSelectProblemExamples = (contestId, problemId) => createSelector(
  selectAppDomain(),
  (substate) => {
    const examples = substate.getIn(['contests', contestId, 'problems', problemId, 'examples']);
    return examples ? examples.toJS() : undefined;
  }
);

const makeSelectProblemSubmits = (contestId, problemId) => createSelector(
  selectProblemDomain(problemId),
  selectSubmitsDomain(),
  (problem, submits) => {
    if (problem && problem.has('submits') && submits) {
      return problem.get('submits').map((s) => submits.get(s)).toJS();
    }
    return undefined;
  }
);

const makeSelectSubmitDetails = (contestId, problemId, submitId) => createSelector(
  selectSubmitDomain(submitId),
  selectTestsResultsDomain(),
  selectSubmitFilesDomain(),
  (submit, testsResults, submitFiles) => {
    if (submit && submit.has('tests') && submit.has('files') && submitFiles && testsResults) {
      return submit.set('tests', submit.get('tests').map((id) => testsResults.get(id)))
        .set('files', submit.get('files').map((id) => submitFiles.get(id))).toJS();
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
