import { createSelector } from 'reselect';

/**
 * Direct selector to the problemViewPage state domain
 */
const selectProblemViewPageDomain = () => (state) => state.get('problemViewPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProblemViewPage
 */

const makeSelectProblemViewPage = () => createSelector(
  selectProblemViewPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectProblemViewPage;
export {
  selectProblemViewPageDomain,
};
