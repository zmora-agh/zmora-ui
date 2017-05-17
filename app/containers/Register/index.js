/*
 *
 * Register
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import RegisterForm from '../../components/RegisterForm';

import { makeSelectRegister } from '../AuthPage/selectors';
import { register } from './actions';

@connect(makeSelectRegister, (dispatch) => ({ dispatch }))
export default class Register extends React.PureComponent {

  @autobind
  onSubmit(nick, name, about, email, password) {
    this.props.dispatch(register(nick, name, about, email, password));
  }

  render() {
    return (
      <RegisterForm
        error={this.props.error}
        onSubmit={this.onSubmit}
        loading={this.props.loading}
      />
    );
  }
}

Register.propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};
