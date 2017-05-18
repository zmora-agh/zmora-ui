export const loginPage = (from) => `/auth${from ? `?from=${encodeURI(from)}` : ''}`;
export const homePage = () => '/';
export const problemPage = (contestId, problemId) => `/contests/${contestId}/problems/${problemId}`;
