/*
 *
 * ProblemViewPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FetchProgress from '../../components/FetchProgress';
import ProblemView from '../../components/ProblemView';
import { problemContentPropTypes } from '../../components/ProblemView/constants';

import { makeSelectProblem } from '../App/selectors';
import { getProblem } from './actions';

export class ProblemViewPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
    this.props.dispatch(getProblem(this.props.contestId, this.props.problemId));
  }

  render() {
    return this.props.problem ?
      <ProblemView {...this.props.problem} /> :
      <FetchProgress />;
  }
}

ProblemViewPage.propTypes = {
  contestId: PropTypes.number.isRequired,
  problemId: PropTypes.number.isRequired,
  problem: PropTypes.shape(problemContentPropTypes),
  defer: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => createStructuredSelector({
  problem: makeSelectProblem(props.contestId, props.problemId),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProblemViewPage);
