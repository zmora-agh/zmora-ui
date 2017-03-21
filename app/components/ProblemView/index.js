/**
*
* ProblemView
*
*/

import React from 'react';
import Text from 'material-ui/Text';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import { problemContentPropTypes } from './constants';

function ProblemView(props) {
  const { title, description, input, output } = props;
  return (
    <div style={{ padding: 24 }}>
      <Text type="display1" component="h1" gutterBottom>{title}</Text>
      <Text type="body1" paragraph>{description}</Text>
      <Text type="headline" component="h2" gutterBottom><FormattedMessage {...messages.input} /></Text>
      <Text type="body1" paragraph>{input}</Text>
      <Text type="headline" component="h2" gutterBottom><FormattedMessage {...messages.output} /></Text>
      <Text type="body1" paragraph>{output}</Text>
    </div>
  );
}

ProblemView.propTypes = problemContentPropTypes;

export default ProblemView;
