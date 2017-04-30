/*
 *
 * ContestsPage actions
 *
 */

import {
  GET_CONTESTS,
  GET_CONTESTS_SUCCESS,
  OPEN_JOIN_CONTEST_MODAL,
  CLOSE_JOIN_CONTEST_MODAL,
  JOIN_CONTEST,
  JOIN_CONTEST_SUCCESS,
  JOIN_CONTEST_ERROR,
} from './constants';

export function getContests() {
  return {
    type: GET_CONTESTS,
  };
}

export function getContestsSuccess(contests) {
  return {
    type: GET_CONTESTS_SUCCESS,
    contests,
  };
}

export function openJoinContestModal(contestName, contestId) {
  return {
    type: OPEN_JOIN_CONTEST_MODAL,
    dialog: {
      contestId,
      contestName,
      open: true,
      error: false,
      loading: false,
    },
  };
}

export function closeJoinContestModal() {
  return {
    type: CLOSE_JOIN_CONTEST_MODAL,
    dialog: {
      open: false,
      error: false,
      loading: false,
    },
  };
}

export function joinContestSuccess(contestId) {
  return {
    type: JOIN_CONTEST_SUCCESS,
    contestId,
    dialog: {
      open: false,
      error: false,
    },
  };
}

export function joinContest(contestId, password) {
  return {
    type: JOIN_CONTEST,
    dialog: {
      loading: true,
    },
    contestId,
    password,
  };
}

export function joinContestError() {
  return {
    type: JOIN_CONTEST_ERROR,
    dialog: {
      error: true,
      loading: false,
    },
  };
}

