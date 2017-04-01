/*
 *
 * ContestPage constants
 *
 */

import React from 'react';

export const GET_CONTEST = 'app/ContestPage/GET_CONTEST';
export const GET_CONTEST_SUCCESS = 'app/ContestPage/GET_CONTEST_SUCCESS';

export const CONTEST_TYPE = React.PropTypes.shape({
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  date: React.PropTypes.string,
  owner: React.PropTypes.string,
});
