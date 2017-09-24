import { createSelector } from 'reselect';
import { makeSelectTime, makeSelectUi } from '../App/selectors';

function mergeIds({ contextContestId, contextProblemId, explicitContestId, explicitProblemId, ...submit }) {
  return {
    ...submit,
    contestId: explicitContestId || contextContestId,
    problemId: explicitProblemId || contextProblemId,
  };
}

const makeSelectSubmit = () => createSelector(
  makeSelectUi(),
  makeSelectTime(),
  (ui, time) => ({ ...mergeIds(ui.submit), offset: time.offset })
);

export default makeSelectSubmit;
