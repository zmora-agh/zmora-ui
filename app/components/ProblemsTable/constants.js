/*
 *
 * ProblemsTable constants
 *
 */

import { PropTypes } from 'react';

export const problemRowPropType = {
  basePoints: PropTypes.number.isRequired,
  hardDeadline: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  shortcode: PropTypes.string.isRequired,
  softDeadline: PropTypes.string.isRequired,
};
