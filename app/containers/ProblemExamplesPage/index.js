/*
 *
 * ProblemExamplesPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import makeSelectProblemExamplesPage from './selectors';
import { getProblemExamples } from './actions';
import ProblemExamples from '../../components/ProblemExamples';
import { examplesPropType } from '../../components/ProblemExamples/constants';

export class ProblemExamplesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(getProblemExamples(this.props.contestId, this.props.problemId));
  }

  render() {
    return (
      <ProblemExamples examples={this.props.problemExamples} />
    );
  }
}

ProblemExamplesPage.propTypes = {
  contestId: PropTypes.number.isRequired,
  problemId: PropTypes.number.isRequired,
  problemExamples: examplesPropType,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectProblemExamplesPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProblemExamplesPage);
