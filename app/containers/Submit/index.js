/*
 *
 * Submit
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import makeSelectSubmit from './selectors';
import { submit, submitModalClose } from './actions';

import SubmitModal from '../../components/SubmitModal';

export class Submit extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      inputs: {},
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onInputChange(e) {
    e.persist();
    this.setState((oldState) => ({ inputs: Object.assign(oldState.inputs, { [e.target.name]: e.target.files[0] }) }));
  }

  onSubmit(e) {
    this.props.dispatch(submit(this.state.inputs, this.props.contestId, this.props.problemId));
    e.preventDefault();
  }

  onCancel() {
    this.props.dispatch(submitModalClose());
  }

  render() {
    return (<SubmitModal
      open={this.props.open}
      onSubmit={this.onSubmit}
      onInputChange={this.onInputChange}
      onCancel={this.onCancel}
    />);
  }
}

Submit.propTypes = {
  open: PropTypes.bool,
  contestId: PropTypes.number,
  problemId: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectSubmit;

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
