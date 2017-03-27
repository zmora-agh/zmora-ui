/*
 *
 * ProblemSubmitsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { CircularProgress } from 'material-ui/Progress';

import makeSelectProblemSubmitsPage from './selectors';
import { getProblemSubmits } from './actions';

import ProblemSubmits from '../../components/ProblemSubmits';
import { submitsPropType } from '../../components/ProblemSubmits/constants';

export class ProblemSubmitsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.fetched && nextProps.fetch) {
      this.props.dispatch(getProblemSubmits(this.props.contestId, this.props.problemId));
      this.setState({ fetched: true });
    }
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
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectProblemSubmitsPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProblemSubmitsPage);
