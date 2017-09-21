/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLogin } from '../AuthPage/selectors';
import { login } from './actions';
import { loginPropType } from '../../components/LoginForm/constants';

import LoginForm from '../../components/LoginForm';

export class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <LoginForm
          onSubmit={(username, password) => this.props.dispatch(login(username, password, this.props.from))}
          {...this.props.login}
        />
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.shape(loginPropType),
  from: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
