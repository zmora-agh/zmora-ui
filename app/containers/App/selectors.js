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
  (substate) => substate.get('user')
);

const makeSelectContests = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('contests').toJS()
);

const makeSelectTime = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('time').toJS()
);

export {
  makeSelectApp,
  makeSelectUser,
  makeSelectLocationState,
  makeSelectContests,
  makeSelectTime,
};
