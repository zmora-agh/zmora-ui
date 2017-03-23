/*
 *
 * ContestsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { CONTEST_TYPE } from './constants';
import makeSelectContestsPage from './selectors';
import { getContests } from './actions'
import ContestsTable from '../../components/ContestsTable';

class ContestsPage extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch(getContests());
  }

  render() {
    if (this.props.children) return this.props.children;

    return (<ContestsTable contests={this.props.contests} />);
  }

  static propTypes = {
    contests: React.PropTypes.arrayOf(CONTEST_TYPE),
    children: React.PropTypes.object,
  };
}

const mapStateToProps = makeSelectContestsPage;

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContestsPage);
