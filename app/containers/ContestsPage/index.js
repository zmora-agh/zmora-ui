/*
 *
 * ContestsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { CONTEST_TYPE } from './constants';
import makeSelectContestsPage from './selectors';
import ContestsTable from '../../components/ContestsTable';
import { hideContestRow, expandContestRow } from './actions';
export class ContestsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.expandRow = this.expandRow.bind(this);
    this.hideRow = this.hideRow.bind(this);
  }
  hideRow(id) {
    this.props.dispatch(hideContestRow(id));
  }

  expandRow(id) {
    this.props.dispatch(expandContestRow(id));
  }

  render() {
    return (
      <ContestsTable
        contests={this.props.contests}
        expandRow={this.expandRow}
        hideRow={this.hideRow}
      />
    );
  }
}

ContestsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  contests: PropTypes.arrayOf(CONTEST_TYPE),
};

const mapStateToProps = makeSelectContestsPage;

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContestsPage);
