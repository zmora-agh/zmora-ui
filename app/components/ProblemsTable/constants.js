/*
 *
 * ProblemsTable constants
 *
 */

import { PropTypes } from 'react';

export const problemRowPropType = {
  shortcode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  deadline: PropTypes.string.isRequired,
};
