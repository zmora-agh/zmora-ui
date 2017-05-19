import React from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import Typography from 'material-ui/Typography';
import messages from './messages';

function ContestStatus(props) {
  const { signupDuration, duration, start } = props.contest;
  const enrolEndTime = moment(start).add(signupDuration, 'seconds');
  const activeEndTime = moment(start).add(signupDuration + duration, 'seconds');

  const endTime = props.time.isAfter(enrolEndTime) ? activeEndTime : enrolEndTime;
  const enrolText = props.time.isBefore(enrolEndTime) ? <FormattedMessage {...messages.enrolmentTo} /> : null;
  const activeText = props.time.isBefore(activeEndTime) ? <FormattedMessage {...messages.activeTo} />
    : <FormattedMessage {...messages.endedOn} />;
  const text = enrolText !== null ? enrolText : activeText;
  const timeFormat = endTime.isSame(props.time, 'days') ? endTime.format('HH:mm') : endTime.format('YYYY-MM-DD');

  return (
    <Typography className={props.styling} >
      {text}: {timeFormat}
    </Typography>
  );
}

ContestStatus.propTypes = {
  contest: React.PropTypes.object.isRequired,
  time: React.PropTypes.object.isRequired,
  styling: React.PropTypes.any,
};

export default ContestStatus;
