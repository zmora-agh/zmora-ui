import { createSelector } from 'reselect';
import { makeSelectUser } from '../App/selectors';

const selectRightMenuDomain = () => (state) => state.get('rightMenu');

const makeSelectRightMenu = () => createSelector(
  selectRightMenuDomain(),
  makeSelectUser(),
  (rightMenu, user) => ({
    rightMenu: rightMenu.toJS(),
    user,
  })
);

export default makeSelectRightMenu();
export {
  selectRightMenuDomain,
};
