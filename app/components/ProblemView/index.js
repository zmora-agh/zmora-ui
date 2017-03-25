/**
*
* ProblemView
*
*/


import React from 'react';
import Text from 'material-ui/Text';
import { problemContentPropTypes } from './constants';

function ProblemView(props) {
  const { name, description } = props;
  return (
    <div style={{ padding: 24 }}>
      <Text type="display1" component="h1" gutterBottom>{name}</Text>
      <Text type="body1" paragraph>{description}</Text>
    </div>
  );
}

ProblemView.propTypes = problemContentPropTypes;

export default ProblemView;
