import { createSelector } from 'reselect';
import { makeSelectUi } from '../App/selectors';

const makeSelectSubmit = () => createSelector(
  makeSelectUi(),
  (ui) => ui.submit
);

export default makeSelectSubmit;
