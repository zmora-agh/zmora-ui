/**
*
* ProblemExamples
*
*/

import React from 'react';

import Paper from 'material-ui/Paper';
import Layout from 'material-ui/Layout';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { FormattedMessage } from 'react-intl';

import { examplesPropType } from './constants';
import messages from './messages';

const DataElement = (props) => (
  <Layout item xs={props.xs}>
    <Typography type="title" component="h2" gutterBottom>{props.desc}</Typography>
    <Paper style={{ padding: '8px 16px' }}>
      <pre>{ props.children }</pre>
    </Paper>
  </Layout>
);

DataElement.propTypes = {
  xs: React.PropTypes.number.isRequired,
  desc: React.PropTypes.node.isRequired,
  children: React.PropTypes.node.isRequired,
};

const createExample = (props) => ([
  <Layout container style={{ padding: 24 }}>
    <DataElement xs={6} desc={<FormattedMessage {...messages.input} />}>
      {props.input}
    </DataElement>
    <DataElement xs={6} desc={<FormattedMessage {...messages.result} />}>
      {props.result}
    </DataElement>
    <DataElement xs={12} desc={<FormattedMessage {...messages.explanation} />}>
      {props.explanation}
    </DataElement>
  </Layout>,
  <Divider />,
]);

function ProblemExamples(props) {
  return (
    <div style={{ overflow: 'hidden' }}>
      {props.examples.map(createExample)}
    </div>
  );
}

ProblemExamples.propTypes = {
  examples: examplesPropType,
};

export default ProblemExamples;
