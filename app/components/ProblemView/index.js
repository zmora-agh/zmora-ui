/**
*
* ProblemView
*
*/


import React from 'react';

import Typography from 'material-ui/Typography';

import { problemContentPropTypes } from './constants';

import Markdown from '../Markdown';

function ProblemView(props) {
  const { name, description } = props;
  return (
    <div style={{ padding: 24 }}>
      <Typography type="display1" component="h1" gutterBottom>{name}</Typography>
      <Markdown text={description} />
    </div>
  );
}

ProblemView.propTypes = problemContentPropTypes;

export default ProblemView;
