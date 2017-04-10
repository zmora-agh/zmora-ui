import { createSelector } from 'reselect';

/**
 * Direct selector to the submitForm state domain
 */
const selectSubmitFormDomain = () => (state) => state.get('submitForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SubmitForm
 */

const makeSelectSubmitForm = () => createSelector(
  selectSubmitFormDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSubmitForm;
export {
  selectSubmitFormDomain,
};
