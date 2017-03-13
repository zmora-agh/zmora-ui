import { createSelector } from 'reselect';

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

const makeSelectContestsPage = () => createSelector(
  selectContestsPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectContestsPage;
export {
  selectContestsPageDomain,
};
