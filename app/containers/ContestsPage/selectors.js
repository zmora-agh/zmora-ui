import { createSelector } from 'reselect';
import { makeSelectContests } from '../App/selectors';

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
  makeSelectContests(),
  (contests) => ({
    contests,
  })
);

export default makeSelectContestsPage;
export {
  selectContestsPageDomain,
};
