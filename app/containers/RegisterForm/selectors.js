import { createSelector } from 'reselect';

/**
 * Direct selector to the registerForm state domain
 */
const selectRegisterFormDomain = () => (state) => state.get('registerForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RegisterForm
 */

const makeSelectRegisterForm = () => createSelector(
  selectRegisterFormDomain(),
  (substate) => substate.toJS()
);

export default makeSelectRegisterForm;
export {
  selectRegisterFormDomain,
};
