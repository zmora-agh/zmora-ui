/*
 *
 * ContestsPage constants
 *
 */

import React from 'react';

export const OPEN_JOIN_CONTEST_MODAL = 'app/ContestsPage/OPEN_JOIN_CONTEST_MODAL';
export const CLOSE_JOIN_CONTEST_MODAL = 'app/ContestsPage/CLOSE_JOIN_CONTEST_MODAL';
export const JOIN_CONTEST = 'app/ContestsPage/JOIN_CONTEST';
export const JOIN_CONTEST_SUCCESS = 'app/ContestsPage/JOIN_CONTEST_SUCCESS';
export const JOIN_CONTEST_ERROR = 'app/ContestsPage/JOIN_CONTEST_ERROR';

export const DIALOG_TYPE = React.PropTypes.shape({
  open: React.PropTypes.bool,
  error: React.PropTypes.bool,
  loading: React.PropTypes.bool,
  contestId: React.PropTypes.string,
  contestName: React.PropTypes.string,
});
