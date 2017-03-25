import { createSelector } from 'reselect';

/**
 * Direct selector to the problemExampleDataPage state domain
 */
const selectProblemExampleDataPageDomain = () => (state) => state.get('problemExampleDataPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProblemExampleDataPage
 */

const makeSelectProblemExampleDataPage = () => createSelector(
  selectProblemExampleDataPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectProblemExampleDataPage;
export {
  selectProblemExampleDataPageDomain,
};
