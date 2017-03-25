/*
 *
 * ProblemExampleDataPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import makeSelectProblemExampleDataPage from './selectors';
import { getProblemExamples } from './actions';
import ProblemExampleData from '../../components/ProblemExampleData';
import { examplesPropType } from '../../components/ProblemExampleData/constants';

export class ProblemExampleDataPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(getProblemExamples(this.props.contestId, this.props.problemId));
  }

  render() {
    return (
      <ProblemExampleData examples={this.props.problemExamples} />
    );
  }
}

ProblemExampleDataPage.propTypes = {
  contestId: PropTypes.number.isRequired,
  problemId: PropTypes.number.isRequired,
  problemExamples: examplesPropType,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectProblemExampleDataPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProblemExampleDataPage);
