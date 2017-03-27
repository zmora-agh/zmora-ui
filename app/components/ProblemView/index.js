/**
*
* ProblemView
*
*/

import React from 'react';
import Text from 'material-ui/Text';
import MathJax from 'react-mathjax';
import ReactMarkdown from 'react-markdown';

import { problemContentPropTypes } from './constants';

const texKeyword = 'tex';

function HtmlCodeBlock(literal, inline) {
  const code = React.createElement('code', {}, literal);
  return inline ? code : React.createElement('pre', {}, code);
}

function Code(props) {
  if (props.literal.substring(0, texKeyword.length) === texKeyword) {
    return <MathJax.Node inline>{props.literal.substring(texKeyword.length + 1, props.literal.length)}</MathJax.Node>;
  }

  return HtmlCodeBlock(props.literal, true);
}
Code.propTypes = {
  literal: React.PropTypes.string.isRequired,
};

function CodeBlock(props) {
  if (props.language === texKeyword) {
    return <MathJax.Node>{props.literal}</MathJax.Node>;
  }

  return HtmlCodeBlock(props.literal);
}
CodeBlock.propTypes = {
  language: React.PropTypes.string.isRequired,
  literal: React.PropTypes.string.isRequired,
};

function ProblemView(props) {
  const { title, description } = props;
  return (
    <div style={{ padding: 24 }}>
      <Text type="display1" component="h1" gutterBottom>{title}</Text>
      <MathJax.Context>
        <ReactMarkdown source={description} renderers={{ code: Code, code_block: CodeBlock }} />
      </MathJax.Context>
    </div>
  );
}

ProblemView.propTypes = problemContentPropTypes;

export default ProblemView;
