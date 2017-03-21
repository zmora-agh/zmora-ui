import { createSelector } from 'reselect';

const selectProblemPageDomain = () => (state) => state.get('problemPage');


const makeSelectProblemPage = () => createSelector(
  selectProblemPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectProblemPage;
export {
  selectProblemPageDomain,
};
