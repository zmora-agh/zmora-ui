/*
 *
 * ProblemSubmitsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import makeSelectProblemSubmitsPage from './selectors';
import { getProblemSubmits } from './actions';
import ProblemSubmits from '../../components/ProblemSubmits';
import { submitsPropType } from '../../components/ProblemSubmits/constants';

export class ProblemSubmitsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(getProblemSubmits(this.props.contestId, this.props.problemId));
  }

  render() {
    return (
      <ProblemSubmits submits={this.props.submits} />
    );
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
