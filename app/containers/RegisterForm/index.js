/*
 *
 * RegisterForm
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'material-ui/Button';
import { createStructuredSelector } from 'reselect';
import makeSelectRegisterForm from './selectors';
import { register } from './actions';

class RegisterForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Button
          onClick={() => this.props.dispatch(register('test', 'test name', 'sth about me', 'test@sadf.pl', 'szatan'))}
        >
          Register
        </Button>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  RegisterForm: makeSelectRegisterForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
