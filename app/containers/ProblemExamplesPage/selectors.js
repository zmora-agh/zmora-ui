import { createSelector } from 'reselect';

/**
 * Direct selector to the problemExampleDataPage state domain
 */
const selectProblemExamplesPageDomain = () => (state) => state.get('problemExamplesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProblemExamplesPage
 */

const makeSelectProblemExamplesPage = () => createSelector(
  selectProblemExamplesPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectProblemExamplesPage;
export {
  selectProblemExamplesPageDomain,
};
