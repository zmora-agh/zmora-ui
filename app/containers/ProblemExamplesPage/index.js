/*
 *
 * ProblemExamplesPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CircularProgress } from 'material-ui/Progress';

import { getProblemExamples } from './actions';
import { makeSelectProblemExamples } from '../App/selectors';

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
    return this.props.examples ?
      <ProblemExamples examples={this.props.examples} /> :
      <div style={{ textAlign: 'center', margin: '50px auto' }}><CircularProgress size={50} /></div>;
  }
}

ProblemExamplesPage.propTypes = {
  contestId: PropTypes.number.isRequired,
  problemId: PropTypes.number.isRequired,
  examples: examplesPropType,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => createStructuredSelector({
  examples: makeSelectProblemExamples(props.contestId, props.problemId),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProblemExamplesPage);
