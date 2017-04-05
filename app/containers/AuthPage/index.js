/*
 *
 * AuthPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../RegisterForm';
import LoginForm from '../LoginForm';

export class AuthPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <LoginForm />
        <RegisterForm />
      </div>
    );
  }
}

AuthPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AuthPage);
