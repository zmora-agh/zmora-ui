import { createSelector } from 'reselect';
import { makeSelectTime, makeSelectUser } from '../App/selectors';

/**
 * Direct selector to the contestsPage state domain
 */
const selectContestsPageDomain = () => (state) => state.get('contestsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ContestsPage
 */

const makeSelectDialog = () => createSelector(
  selectContestsPageDomain(),
  (substate) => substate.get('dialog').toJS()
);

const makeSelectContestsPage = () => createSelector(
  makeSelectDialog(),
  makeSelectTime(),
  makeSelectUser(),
  (dialog, time, user) => ({
    dialog,
    offset: time.offset,
    userId: user.id,
  })
);

export default makeSelectContestsPage;
export {
  selectContestsPageDomain,
};
