import React from 'react';
import moment from 'moment';
import ContestRow from './Row';
import ContestJoinModal from '../ContestJoinModal';
import ExpandableTable from '../ExpandableTable';
import { DIALOG_TYPE } from '../../containers/ContestsPage/constants';

export class ContestsTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    offset: React.PropTypes.number.isRequired,
    contests: React.PropTypes.array.isRequired,
    dialog: DIALOG_TYPE,
    onJoinModalOpen: React.PropTypes.func.isRequired,
    onJoinModalClose: React.PropTypes.func.isRequired,
    onJoinContest: React.PropTypes.func.isRequired,
  };

  isVisible(contest, serverTime) {
    const enrolEndTime = moment(contest.start).add(contest.signupDuration, 'seconds');
    return serverTime.isBefore(enrolEndTime) || contest.joined;
  }

  render() {
    const serverTime = moment().add(this.props.offset, 'seconds');
    const rows = this.props.contests
      .filter((c) => this.isVisible(c, serverTime))
      .map((c) => (
        <ContestRow
          key={c.id}
          contest={c}
          serverTime={serverTime}
          onJoinClick={this.props.onJoinModalOpen}
        />
      ));
    const dialog = this.props.dialog.contestId ? (
      <ContestJoinModal
        dialog={this.props.dialog}
        onClose={this.props.onJoinModalClose}
        onJoin={this.props.onJoinContest}
      />) : null;

    return (
      <ExpandableTable>
        {dialog}
        {rows}
      </ExpandableTable>
    );
  }
}

export default ContestsTable;
