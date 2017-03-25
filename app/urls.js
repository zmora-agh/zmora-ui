import { API_URL } from './constants';

export const getCurrentUserURL = () => `${API_URL}currentUser`;
export const getProblemURL = (contestId, problemId) => `${API_URL}contests/${contestId}/problems/${problemId}`;
export const getProblemExamplesURL = (contestId, problemId) => `${API_URL}contests/${contestId}/problems/${problemId}/examples`;
