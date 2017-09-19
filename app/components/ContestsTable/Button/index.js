import React from 'react';
import moment from 'moment';
import Button from 'material-ui/Button';
import { Link } from 'react-router';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ContestButton(props) {
  const { canJoinStarted, signupDuration, start, id } = props.contest;
  const startTime = moment(start).add(signupDuration, 'seconds');
  const started = props.time.isAfter(startTime);

  const canEnter = started || props.isOwner;
  const canJoin = (!started || canJoinStarted) && !props.contest.joined && !props.isOwner;

  return canJoin ? joinButton(props.onClick) : enterButton(canEnter, id);
}

ContestButton.propTypes = {
  contest: React.PropTypes.object.isRequired,
  time: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func,
  isOwner: React.PropTypes.bool.isRequired,
};

export default ContestButton;

function enterButton(canEnter, contestId) {
  const button = (
    <Button raised color="primary" disabled={!canEnter}>
      <FormattedMessage {...messages.enter} />
    </Button>
  );
  return canEnter ? <Link to={`/contests/${contestId}`}>{button}</Link> : button;
}

function joinButton(join) {
  return (
    <Button onClick={join} raised color="primary">
      <FormattedMessage {...messages.join} />
    </Button>
  );
}
