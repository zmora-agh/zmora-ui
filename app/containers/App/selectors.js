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
const selectNotificationsDomain = () => (state) => state.get('notifications');
const selectUiDomain = () => (state) => state.get('ui');

const makeSelectApp = () => createSelector(
  selectAppDomain(),
  selectNotificationsDomain(),
  (app, notifications) => ({ ...app.toJS(), notifications })
);

const makeSelectUi = () => createSelector(
  selectUiDomain(),
  (ui) => ui.toJS()
);

const makeSelectUser = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('user').toJS()
);

const makeSelectTime = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('time').toJS()
);

export {
  makeSelectApp,
  makeSelectUi,
  makeSelectUser,
  makeSelectLocationState,
  makeSelectTime,
};
