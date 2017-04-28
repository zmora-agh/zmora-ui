import {
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
} from './constants';

export function getQuestions(contestId, problemId) {
  return {
    type: GET_QUESTIONS,
    contestId,
    problemId,
  };
}

export function getQuestionsSuccess(contestId, problemId, questions) {
  return {
    type: GET_QUESTIONS_SUCCESS,
    contestId,
    problemId,
    questions,
  };
}
