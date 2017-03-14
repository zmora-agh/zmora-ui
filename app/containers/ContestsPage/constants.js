/*
 *
 * ContestsPage constants
 *
 */
import React from 'react';

export const CONTEST_TYPE = React.PropTypes.shape({
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  date: React.PropTypes.string,
  owner: React.PropTypes.string,
  childContests: React.PropTypes.array,
});
