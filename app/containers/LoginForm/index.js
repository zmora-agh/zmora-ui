/*
 *
 * LoginForm
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import { createStructuredSelector } from 'reselect';
import makeSelectLoginForm from './selectors';
import { login } from './actions';

export class LoginForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Button onClick={() => this.props.dispatch(login('maxmati', 'dupa.8'))} >Login</Button>
      </div>
    );
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LoginForm: makeSelectLoginForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
