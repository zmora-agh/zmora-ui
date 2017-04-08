/*
 *
 * Register
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Button } from 'material-ui/Button';

import { makeSelectRegister } from '../AuthPage/selectors';
import { register } from './actions';

class Register extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Button
          onClick={() => this.props.dispatch(register('test', 'test name', 'sth about me', 'test@sadf.pl', 'szatan'))}
        >
          Register
        </Button>
        {this.props.register.error && 'error'}
      </div>
    );
  }
}

Register.propTypes = {
  register: PropTypes.shape({
    error: PropTypes.bool,
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
