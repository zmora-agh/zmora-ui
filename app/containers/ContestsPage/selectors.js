import { createSelector } from 'reselect';
import { makeSelectTime } from '../App/selectors';

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
  (dialog, time) => ({
    dialog,
    offset: time.offset,
  })
);

export default makeSelectContestsPage;
export {
  selectContestsPageDomain,
};
