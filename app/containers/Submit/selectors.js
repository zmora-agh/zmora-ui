import { createSelector } from 'reselect';
import { makeSelectUi } from '../App/selectors';

function mergeIds({ contextContestId, contextProblemId, explicitContestId, explicitProblemId, ...submit }) {
  return {
    ...submit,
    contestId: explicitContestId || contextContestId,
    problemId: explicitProblemId || contextProblemId,
  };
}

const makeSelectSubmit = () => createSelector(
  makeSelectUi(),
  (ui) => mergeIds(ui.submit)
);

export default makeSelectSubmit;
