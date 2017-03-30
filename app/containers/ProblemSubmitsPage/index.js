/*
 *
 * ProblemSubmitsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CircularProgress } from 'material-ui/Progress';

import { makeSelectProblemSubmits } from '../App/selectors';
import { getProblemSubmits } from './actions';

import ProblemSubmits from '../../components/ProblemSubmits';
import { submitsPropType } from '../../components/ProblemSubmits/constants';

export class ProblemSubmitsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.requestData = this.requestData.bind(this);
  }

  componentDidMount() {
    if (!this.props.defer) this.requestData();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.defer && !nextProps.defer) this.requestData();
  }

  requestData() {
    this.props.dispatch(getProblemSubmits(this.props.contestId, this.props.problemId));
  }

  render() {
    return this.props.submits ?
      <ProblemSubmits submits={this.props.submits} /> :
      <div style={{ textAlign: 'center', margin: '50px auto' }}><CircularProgress size={50} /></div>;
  }
}

ProblemSubmitsPage.propTypes = {
  contestId: PropTypes.number.isRequired,
  problemId: PropTypes.number.isRequired,
  submits: submitsPropType,
  defer: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => createStructuredSelector({
  submits: makeSelectProblemSubmits(props.contestId, props.problemId),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProblemSubmitsPage);
