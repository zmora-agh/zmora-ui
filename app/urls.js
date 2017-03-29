import { API_URL } from './constants';

export const getCurrentUserURL = () => `${API_URL}currentUser`;
export const getCurrentTimeURL = () => `${API_URL}getTime`;

export const getContestsURL = () => `${API_URL}contests`;
export const getProblemURL = (contestId, problemId) => `${getContestsURL()}/${contestId}/problems/${problemId}`;
export const getProblemExamplesURL = (contestId, problemId) => `${getProblemURL(contestId, problemId)}/examples`;
export const getProblemSubmitsURL = (contestId, problemId) => `${getProblemURL(contestId, problemId)}/submits`;
