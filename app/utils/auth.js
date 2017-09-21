import React from 'react';
import { browserHistory } from 'react-router';
import { loginPage } from '../local-urls';


const jwtTokenKey = 'jwtToken';
export const getJwtToken = () => localStorage.getItem(jwtTokenKey);
export const haveJwtToken = () => getJwtToken() !== null;
export const setJwtToken = (token) => localStorage.setItem(jwtTokenKey, token);
export const deleteJwtToken = () => localStorage.removeItem(jwtTokenKey);

export function requireAuth(nextState, replace, callback) {
  if (!haveJwtToken()) replace(loginPage(browserHistory.getCurrentLocation().pathname));

  callback();
}

export const componentRequireAuth = (Elem) => (
  class extends React.PureComponent {
    componentWillMount() {
      this.perform();
    }
    componentWillUpdate() {
      this.perform();
    }
    render() {
      return <Elem {...this.props} />;
    }

    perform() {
      if (!haveJwtToken()) {
        browserHistory.replace(loginPage(browserHistory.getCurrentLocation().pathname));
      }
    }

  });
