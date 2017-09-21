import { Map } from 'immutable';
import { createSelector } from 'reselect';

const selectAuthDomain = () => (state) => state.get('auth', Map());

const makeSelectLogin = () => createSelector(
  selectAuthDomain(),
  (auth) => auth.login.toJS()
);

const makeSelectRegister = () => createSelector(
  selectAuthDomain(),
  (auth) => auth.register.toJS()
);

export default selectAuthDomain;
export {
  makeSelectLogin,
  makeSelectRegister,
};
