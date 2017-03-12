import { createSelector } from 'reselect';

/**
 * Direct selector to the newsPage state domain
 */
const selectNewsPageDomain = () => (state) => state.get('newsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NewsPage
 */

const makeSelectNewsPage = () => createSelector(
  selectNewsPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectNewsPage;
export {
  selectNewsPageDomain,
};
