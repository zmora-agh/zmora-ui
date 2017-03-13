/*
 *
 * ContestsPage constants
 *
 */
import React from 'react';

export const DEFAULT_ACTION = 'app/ContestsPage/DEFAULT_ACTION';
export const HIDE_CONTEST_ROW = 'app/ContestsPage/HIDE_CONTEST_ROW';
export const EXPAND_CONTEST_ROW = 'app/ContestsPage/EXPAND_CONTEST_ROW';

export const CONTEST_TYPE = React.PropTypes.shape({
  id: React.PropTypes.string.isRequired,
  expanded: React.PropTypes.bool,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  date: React.PropTypes.string,
  owner: React.PropTypes.string,
  childContests: React.PropTypes.array,
});
