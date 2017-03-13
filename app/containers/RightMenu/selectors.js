import { createSelector } from 'reselect';

const selectRightMenuDomain = () => (state) => state.get('rightMenu');

const makeSelectRightMenu = () => createSelector(
  selectRightMenuDomain(),
  (substate) => substate.toJS()
);

export default makeSelectRightMenu();
export {
  selectRightMenuDomain,
};
