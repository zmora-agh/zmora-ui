/*
 *
 * SubmitForm
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectSubmitForm from './selectors';
import { submit } from './actions';

import SubmitModal from '../../components/SubmitModal';

export class SubmitForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      inputs: {},
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(e) {
    e.persist();
    this.setState((oldState) => ({ inputs: Object.assign(oldState.inputs, { [e.target.name]: e.target.files[0] }) }));
  }

  onSubmit(e) {
    this.props.dispatch(submit(this.state.inputs, 2, 30));
    e.preventDefault();
  }

  render() {
    return (
      <SubmitModal onSubmit={this.onSubmit} onInputChange={this.onInputChange} />
    );
  }
}

SubmitForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SubmitForm: makeSelectSubmitForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm);
