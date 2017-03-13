import { createSelector } from 'reselect';

/**
 * Direct selector to the rankingPage state domain
 */
const selectRankingPageDomain = () => (state) => state.get('rankingPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RankingPage
 */

const makeSelectRankingPage = () => createSelector(
  selectRankingPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectRankingPage;
export {
  selectRankingPageDomain,
};
