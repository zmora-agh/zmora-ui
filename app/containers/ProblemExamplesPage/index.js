/*
 *
 * ProblemExamplesPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { CircularProgress } from 'material-ui/Progress';

import makeSelectProblemExamplesPage from './selectors';
import { getProblemExamples } from './actions';

import ProblemExamples from '../../components/ProblemExamples';
import { examplesPropType } from '../../components/ProblemExamples/constants';

export class ProblemExamplesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.fetched && nextProps.fetch) {
      this.props.dispatch(getProblemExamples(this.props.contestId, this.props.problemId));
      this.setState({ fetched: true });
    }
  }

  render() {
    return this.props.problemExamples ?
      <ProblemExamples examples={this.props.problemExamples} /> :
      <div style={{ textAlign: 'center', margin: '50px auto' }}><CircularProgress size={50} /></div>;
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
