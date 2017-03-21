/*
 *
 * ContestsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { CONTEST_TYPE } from './constants';
import makeSelectContestsPage from './selectors';
import ContestsTable from '../../components/ContestsTable';

const ContestsPage = (props) => {
  if (props.children) return props.children;

  return (<ContestsTable contests={props.contests} />);
};

ContestsPage.propTypes = {
  contests: React.PropTypes.arrayOf(CONTEST_TYPE),
  children: React.PropTypes.object,
};

const mapStateToProps = makeSelectContestsPage;

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContestsPage);
