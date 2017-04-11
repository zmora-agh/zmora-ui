/*
 *
 * ContestSummaryPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectContest } from '../App/selectors';

import { CONTEST_TYPE } from './constants';
import { getContest } from './actions';

import FetchView from '../../components/FetchView';
import ContestSummary from '../../components/ContestSummary';

const getContestId = (props) => parseInt(props.params.contest_id, 10);

export class ContestPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(getContest(getContestId(this.props)));
    if (!this.props.children) {
      this.props.dispatch(push(`/contests/${this.props.params.contest_id}/problems`));
    }
  }

  render() {
    if (this.props.children) return this.props.children;

    return <FetchView>{this.props.contest && <ContestSummary {...this.props.contest} />}</FetchView>;
  }
}

ContestPage.propTypes = {
  children: PropTypes.object,
  params: PropTypes.shape({ contest_id: PropTypes.string }),
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
