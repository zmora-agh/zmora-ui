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

const makeSelectApp = () => createSelector(
  selectAppDomain(),
  (substate) => substate.toJS()
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
  (substate) => {
    // FIXME define complete selector return value shape
    const contestShape = (contest) => contest.has('owners');
    return substate.get('contestsFetched') ? substate.get('contests').filter(contestShape).toJS() : undefined;
  }
);

const makeSelectTime = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('time').toJS()
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

export {
  makeSelectApp,
  makeSelectUser,
  makeSelectLocationState,
  makeSelectContest,
  makeSelectContests,
  makeSelectTime,
  makeSelectProblem,
  makeSelectProblemExamples,
  makeSelectProblemSubmits,
};
