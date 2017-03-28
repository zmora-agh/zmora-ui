/**
 *
 * ProblemView
 *
 */

import React from 'react';
import Markdown from '../Markdown';

import { problemContentPropTypes } from './constants';


function ProblemView(props) {
  const { description } = props;
  return (
    <div>
      <Markdown text={description} />
    </div>
  );
}

ProblemView.propTypes = problemContentPropTypes;

export default ProblemView;
