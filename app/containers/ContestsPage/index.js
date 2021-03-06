import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { gql, graphql } from 'react-apollo';
import autobind from 'autobind-decorator';

import { ContestsTable } from '../../components/ContestsTable';
import EmptyMessage from '../../components/EmptyMessage';

import makeSelectContestsPage from './selectors';
import { DIALOG_TYPE } from './constants';
import { openJoinContestModal, closeJoinContestModal, joinContest } from './actions';
import messages from './messages';
import { loadable } from '../../utils/render';

const ContestsListForLayout = gql`
  query ContestsListForLayout { 
    contests {
      id
      start
      name
      joined
      description
      signupDuration
      canJoinStarted
      duration
      owners {
        id
        name
      }
    }
  }
`;

@graphql(ContestsListForLayout)
@connect(makeSelectContestsPage, (dispatch) => ({ dispatch }))
@loadable({ })
export default class ContestsPage extends React.PureComponent {
  static propTypes = {
    dialog: DIALOG_TYPE,
    data: React.PropTypes.object,
    offset: React.PropTypes.number.isRequired,
    children: React.PropTypes.object,
    dispatch: React.PropTypes.func.isRequired,
    userId: React.PropTypes.number.isRequired,
  };

  @autobind
  onJoinModalOpen(contestId, contestName) {
    this.props.dispatch(openJoinContestModal(contestName, contestId));
  }

  @autobind
  onJoinModalClose() {
    this.props.dispatch(closeJoinContestModal());
  }

  @autobind
  onJoinContest(contestId, password) {
    this.props.dispatch(joinContest(contestId, password));
  }

  render() {
    if (this.props.children) return this.props.children;

    if (this.props.data.contests && this.props.data.contests.length === 0) {
      return <EmptyMessage><FormattedMessage {...messages.empty} /></EmptyMessage>;
    }

    return (<ContestsTable
      onJoinModalOpen={this.onJoinModalOpen}
      onJoinModalClose={this.onJoinModalClose}
      onJoinContest={this.onJoinContest}
      dialog={this.props.dialog}
      contests={this.props.data.contests}
      offset={this.props.offset}
      userId={this.props.userId}
    />);
  }
}
