import React from 'react';
import moment from 'moment';
import Button from 'material-ui/Button';
import { Link } from 'react-router';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ContestButton(props) {
  const { signupDuration, start, id } = props.contest;
  const enrolEndTime = moment(start).add(signupDuration, 'seconds');
  const enterActive = props.time.isAfter(enrolEndTime) || props.isOwner;
  const enterButton = (
    <Button raised color="primary" disabled={!enterActive}>
      <FormattedMessage {...messages.enter} />
    </Button>
  );
  const activeEnterButton = !enterActive ? enterButton : <Link to={`/contests/${id}`}>{enterButton}</Link>;

  const joinButton = (
    <Button onClick={props.onClick} raised color="primary">
      <FormattedMessage {...messages.join} />
    </Button>
  );

  return ((props.time.isAfter(enrolEndTime) || props.contest.joined || props.isOwner) ? activeEnterButton : joinButton);
}

ContestButton.propTypes = {
  contest: React.PropTypes.object.isRequired,
  time: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func,
  isOwner: React.PropTypes.bool.isRequired,
};

export default ContestButton;
