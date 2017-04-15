/*
 *
 * ContestSummaryPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectContest } from '../App/selectors';

import { CONTEST_TYPE } from './constants';
import { getContest } from './actions';

import FetchProgress from '../../components/FetchProgress';
import ContestSummary from '../../components/ContestSummary';

const getContestId = (props) => parseInt(props.params.contest_id, 10);

export class ContestPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(getContest(getContestId(this.props)));
  }

  render() {
    if (this.props.children) return this.props.children;

    return this.props.contest ?
      <ContestSummary {...this.props.contest} /> :
      <FetchProgress />;
  }
}

ContestPage.propTypes = {
  children: PropTypes.object,
  contest: CONTEST_TYPE,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => createStructuredSelector({
  contest: makeSelectContest(getContestId(props)),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContestPage);
