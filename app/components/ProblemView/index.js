/**
*
* ProblemView
*
*/


import React from 'react';

import Text from 'material-ui/Text';

import { problemContentPropTypes } from './constants';

import Markdown from '../Markdown';

function ProblemView(props) {
  const { name, description } = props;
  return (
    <div style={{ padding: 24 }}>
      <Text type="display1" component="h1" gutterBottom>{name}</Text>
      <Markdown text={description} />
    </div>
  );
}

ProblemView.propTypes = problemContentPropTypes;

export default ProblemView;
