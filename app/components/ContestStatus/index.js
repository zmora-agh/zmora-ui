/**
*
* ContestStatus
*
*/

import React from 'react';
import moment from 'moment';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function prepareContestStatus(serverTime, enrolEndTime, activeEndTime) {
  const endTime = serverTime.isAfter(enrolEndTime) ? activeEndTime : enrolEndTime;
  const enrolText = serverTime.isBefore(enrolEndTime) ? <FormattedMessage {...messages.enrolmentTo} /> : null;
  const activeText = serverTime.isBefore(activeEndTime) ? <FormattedMessage {...messages.activeTo} />
    : <FormattedMessage {...messages.endedOn} />;
  const text = enrolText !== null ? enrolText : activeText;
  const timeFormat = endTime.isSame(serverTime, 'days') ? endTime.format('HH:mm') : endTime.format('YYYY-MM-DD');

  return (
    <div>
      {text}: {timeFormat}
    </div>
  );
}

function ContestStatus(props) {
  const { signupDuration, duration, start } = props.contest;
  const enrolEndTime = moment(start).add(signupDuration, 'seconds');
  const activeEndTime = moment(start).add(signupDuration + duration, 'seconds');
  return (
    prepareContestStatus(props.time, enrolEndTime, activeEndTime)
  );
}

ContestStatus.propTypes = {
  contest: React.PropTypes.object.isRequired,
  time: React.PropTypes.object.isRequired,
};

export default ContestStatus;
