/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

export const GET_CURRENT_TIME_SUCCESS = 'app/GET_CURRENT_TIME_SUCCESS';
export const LOGOUT = 'app/Login/LOGOUT';
export const CLEAR_FATAL_ERROR = 'app/CLEAR_FATAL_ERROR';
export const SET_FATAL_ERROR = 'app/SET_FATAL_ERROR';

