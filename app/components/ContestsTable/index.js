import React from 'react';
import moment from 'moment';
import ContestRow from './Row';
import ContestJoinModal from '../ContestJoinModal';
import ExpandableTable from '../ExpandableTable';

export class ContestsTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    offset: React.PropTypes.number.isRequired,
    contests: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      dialog: {
        contest: undefined,
        open: false,
      },
    };
    this.handleJoinClick = this.handleJoinClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.isVisible = this.isVisible.bind(this);
  }

  handleJoinClick(contest) {
    this.setState({ dialog: { contest, open: true } });
  }

  handleCloseModal() {
    this.setState({ dialog: { ...this.state.dialog, open: false } });
  }

  isVisible(contest, serverTime) {
    const enrolEndTime = moment(contest.start).add(contest.signupDuration, 'seconds');
    return serverTime.isBefore(enrolEndTime) || contest.joined;
  }

  render() {
    const serverTime = moment().add(this.props.offset, 'seconds');
    const rows = Object.keys(this.props.contests)
      .filter((key) => this.isVisible(this.props.contests[key], serverTime))
      .map((key) => (
        <ContestRow
          key={key}
          contest={this.props.contests[key]}
          serverTime={serverTime}
          onJoinClick={this.handleJoinClick}
        />
      ));
    const dialog = this.state.dialog.contest ? (
      <ContestJoinModal
        open={this.state.dialog.open}
        contest={this.state.dialog.contest}
        onClose={this.handleCloseModal}
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
