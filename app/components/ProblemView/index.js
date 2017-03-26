/**
 *
 * ProblemView
 *
 */

import React from 'react';
import Text from 'material-ui/Text';
import MDReactComponent from 'markdown-react-js';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { problemContentPropTypes } from './constants';


function ProblemView(props) {
  const { title, description, input, output } = props;
  return (
    <div style={{ padding: 24 }}>
      <Text type="display1" component="h1" gutterBottom>{title}</Text>
      <MDReactComponent text={description} />
      <Text type="headline" component="h2" gutterBottom><FormattedMessage {...messages.input} /></Text>
      <MDReactComponent text={input} />
      <Text type="headline" component="h2" gutterBottom><FormattedMessage {...messages.output} /></Text>
      <MDReactComponent text={output} />

    </div>
  );
}

ProblemView.propTypes = problemContentPropTypes;

export default ProblemView;
