import { API_URL } from './constants';

export const getCurrentTimeURL = () => `${API_URL}time`;

export const getContestsURL = () => `${API_URL}contests`;
export const getContestURL = (contestId) => `${getContestsURL()}/${contestId}`;
export const getProblemsURL = (contestId) => `${getContestURL(contestId)}/problems`;
export const getProblemURL = (contestId, problemId) => `${getProblemsURL(contestId)}/${problemId}`;
export const getProblemExamplesURL = (contestId, problemId) => `${getProblemURL(contestId, problemId)}/examples`;
export const getProblemSubmitsURL = (contestId, problemId) => `${getProblemURL(contestId, problemId)}/submits`;

export const loginURL = () => `${API_URL}users/auth`;
export const registerURL = () => `${API_URL}users`;
