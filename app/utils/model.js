import moment from 'moment';

export const isContestInProgress = (contest, serverTime) => {
  const startTime = moment(contest.start).add(contest.signupDuration, 'seconds');
  const endTime = moment(startTime).add(contest.duration, 'seconds');

  return serverTime.isBetween(startTime, endTime);
};

export const isProblemBeforeHardDeadline = (problem, serverTime) =>
  serverTime.isBefore(problem.hardDeadline);
