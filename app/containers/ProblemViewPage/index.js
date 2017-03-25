/*
 *
 * ProblemViewPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import makeSelectProblemViewPage from './selectors';
import { getProblem } from './actions';
import ProblemView from '../../components/ProblemView';
import { problemContentPropTypes } from '../../components/ProblemView/constants';

export class ProblemViewPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(getProblem(this.props.contestId, this.props.problemId));
  }

  render() {
    return (
      <ProblemView {...this.props.problem.problem} />
    );
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
