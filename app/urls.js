import { API_URL } from './constants';

export const getProblemSubmitsURL = (contestId, problemId) => `${API_URL}/problem/${problemId}/submit`;
