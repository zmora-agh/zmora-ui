/*
 *
 * ContestsPage actions
 *
 */

import {
  DEFAULT_ACTION,
  HIDE_CONTEST_ROW,
  EXPAND_CONTEST_ROW,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function hideContestRow(id) {
  return {
    type: HIDE_CONTEST_ROW,
    value: id,
  };
}

export function expandContestRow(id) {
  return {
    type: EXPAND_CONTEST_ROW,
    value: id,
  };
}
