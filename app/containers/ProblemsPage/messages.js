/*
 * ProblemsPage Messages
 *
 * This contains all the text for the ProblemsPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  empty: {
    id: 'app.containers.ProblemsPage.empty',
    defaultMessage: 'There are no problems to solve yet.',
  },
  results: {
    id: 'app.containers.ProblemsPage.results',
    defaultMessage: 'Results',
  },
  submited: {
    id: 'app.containers.ProblemsPage.submited',
    defaultMessage: 'Answers submited: {count, number}',
  },
  valid: {
    id: 'app.containers.ProblemsPage.valid',
    defaultMessage: 'Valid answers: {count, number}',
  },
  invalid: {
    id: 'app.containers.ProblemsPage.invalid',
    defaultMessage: 'Invalid answers: {count, number}',
  },
});
