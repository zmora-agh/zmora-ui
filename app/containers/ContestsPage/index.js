/*
 *
 * ContestsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Typography } from 'material-ui/Typography';
import FetchView from '../../components/FetchView';
import { ContestsTable } from '../../components/ContestsTable';

import makeSelectContestsPage from './selectors';
import { DIALOG_TYPE } from './constants';
import { getContests, openJoinContestModal, closeJoinContestModal, joinContest } from './actions';
import messages from './messages';

class ContestsPage extends React.PureComponent {
  static propTypes = {
    dialog: DIALOG_TYPE,
    contests: React.PropTypes.object,
    offset: React.PropTypes.number.isRequired,
    children: React.PropTypes.object,
    dispatch: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.onJoinContest = this.onJoinContest.bind(this);
    this.onJoinModalClose = this.onJoinModalClose.bind(this);
    this.onJoinModalOpen = this.onJoinModalOpen.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getContests());
  }

  onJoinModalOpen(contestId, contestName) {
    this.props.dispatch(openJoinContestModal(contestName, contestId));
  }

  onJoinModalClose() {
    this.props.dispatch(closeJoinContestModal());
  }

  onJoinContest(contestId, password) {
    this.props.dispatch(joinContest(contestId, password));
  }

  render() {
    if (this.props.children) return this.props.children;

    // FIXME This code is totally unusable as ContestsTable render() fails when this.props.contests === {}
    if (this.props.contests && Object.keys(this.props.contests).length === 0) {
      return <Typography><FormattedMessage {...messages.empty} /></Typography>;
    }

    return (<FetchView>
      {this.props.contests &&
      <ContestsTable
        onJoinModalOpen={this.onJoinModalOpen}
        onJoinModalClose={this.onJoinModalClose}
        onJoinContest={this.onJoinContest}
        dialog={this.props.dialog}
        contests={this.props.contests}
        offset={this.props.offset}
      />
      }
    </FetchView>);
  }
}

const mapStateToProps = makeSelectContestsPage;

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContestsPage);
