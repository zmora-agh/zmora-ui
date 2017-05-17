/**
*
* ContestSummary
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

function ContestSummary(props) {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <ul>
        <li>Name: {props.name}</li>
        <li>Start: {props.start}</li>
        <li>Description: {props.description}</li>
        <li>Duration: {props.duration}</li>
        <li>Signup duration: {props.signupDuration}</li>
      </ul>
    </div>
  );
}

ContestSummary.propTypes = React.PropTypes.shape({
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  date: React.PropTypes.string,
  owner: React.PropTypes.string,
});

export default ContestSummary;
