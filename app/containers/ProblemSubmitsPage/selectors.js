import { createSelector } from 'reselect';

/**
 * Direct selector to the problemSubmitsPage state domain
 */
const selectProblemSubmitsPageDomain = () => (state) => state.get('problemSubmitsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProblemSubmitsPage
 */

const makeSelectProblemSubmitsPage = () => createSelector(
  selectProblemSubmitsPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectProblemSubmitsPage;
export {
  selectProblemSubmitsPageDomain,
};
