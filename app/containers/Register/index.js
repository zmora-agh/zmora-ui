/*
 *
 * Register
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import RegisterForm from '../../components/RegisterForm';

import { makeSelectRegister } from '../AuthPage/selectors';
import { register } from './actions';

class Register extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(nick, name, about, email, password) {
    this.props.dispatch(register(nick, name, about, email, password));
  }

  render() {
    return (
      <RegisterForm
        error={this.props.register.error}
        onSubmit={this.onSubmit}
        loading={this.props.register.loading}
      />
    );
  }
}

Register.propTypes = {
  register: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool,
  }),
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  register: makeSelectRegister(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
