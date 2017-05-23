export const loginPage = (from) => `/auth${from ? `?from=${encodeURI(from)}` : ''}`;
export const homePage = () => '/';
export const contestResults = (contestId) => `/contests/${contestId}/results`;
export const problemPage = (contestId, problemId) => `/contests/${contestId}/problems/${problemId}`;
export const profilePage = () => '/profile';
