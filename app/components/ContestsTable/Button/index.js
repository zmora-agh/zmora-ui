import React from 'react';
import moment from 'moment';
import { Button } from 'material-ui/Button';
import { Link } from 'react-router';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ContestButton(props) {
  const { signupDuration, start, id } = props.contest;
  const enrolEndTime = moment(start).add(signupDuration, 'seconds');
  const buttonText = props.time.isAfter(enrolEndTime) ? <FormattedMessage {...messages.enter} />
    : <FormattedMessage {...messages.join} />;
  const path = props.time.isAfter(enrolEndTime) ? `/contests/${id}` : `/contests/${id}/join`;
  return (
    <Link to={path}>
      <Button raised primary>
        {buttonText}
      </Button>
    </Link>
  );
}

ContestButton.propTypes = {
  contest: React.PropTypes.object.isRequired,
  time: React.PropTypes.object.isRequired,
};

export default ContestButton;
