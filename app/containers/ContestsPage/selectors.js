import { createSelector } from 'reselect';
import { makeSelectContests, makeSelectTime } from '../App/selectors';

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
  makeSelectTime(),
  (contests, time) => ({
    contests,
    offset: time.offset,
  })
);

export default makeSelectContestsPage;
export {
  selectContestsPageDomain,
};
