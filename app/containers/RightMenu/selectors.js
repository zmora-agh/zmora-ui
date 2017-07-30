import { createSelector } from 'reselect';
import { makeSelectUser } from '../App/selectors';

const makeSelectRightMenu = () => createSelector(
  makeSelectUser(),
  (user) => ({
    user,
  })
);

export default makeSelectRightMenu();
