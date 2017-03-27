/*
 *
 * ProblemViewPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { CircularProgress } from 'material-ui/Progress';

import makeSelectProblemViewPage from './selectors';
import { getProblem } from './actions';

import ProblemView from '../../components/ProblemView';
import { problemContentPropTypes } from '../../components/ProblemView/constants';

export class ProblemViewPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.fetched && nextProps.fetch) {
      this.props.dispatch(getProblem(this.props.contestId, this.props.problemId));
      this.setState({ fetched: true });
    }
  }

  render() {
    return this.props.problem.problem ?
      <ProblemView {...this.props.problem.problem} /> :
      <div style={{ textAlign: 'center', margin: '50px auto' }}><CircularProgress size={50} /></div>;
  }
}

ProblemViewPage.propTypes = {
  problem: PropTypes.shape({
    problem: React.PropTypes.shape(problemContentPropTypes),
  }),
  contestId: PropTypes.number.isRequired,
  problemId: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectProblemViewPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProblemViewPage);
