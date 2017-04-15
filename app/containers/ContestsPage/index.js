/*
 *
 * ContestsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import makeSelectContestsPage from './selectors';
import { getContests } from './actions';

import FetchProgress from '../../components/FetchProgress';
import { ContestsTable } from '../../components/ContestsTable';

class ContestsPage extends React.PureComponent {
  static propTypes = {
    contests: React.PropTypes.object,
    offset: React.PropTypes.number.isRequired,
    children: React.PropTypes.object,
    dispatch: React.PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(getContests());
  }

  render() {
    if (this.props.children) return this.props.children;

    return this.props.contests ?
      <ContestsTable
        contests={this.props.contests}
        offset={this.props.offset}
      /> : <FetchProgress />;
  }
}

const mapStateToProps = makeSelectContestsPage;

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContestsPage);
