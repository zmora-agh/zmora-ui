import React from 'react';
import MathJax from 'react-mathjax';
import ReactMarkdown from 'react-markdown';

// needed to get "markdown-body" in scope
// eslint-disable-next-line no-unused-vars
import MarkdownElement from 'react-material-markdown-element';

import { markdownPropTypes } from './constants';


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

function Markdown(props) {
  const { text } = props;
  return (
    <div
      className="markdown-body"
    >
      <MathJax.Context>
        <ReactMarkdown source={text} renderers={{ code: Code, code_block: CodeBlock }} />
      </MathJax.Context>
    </div>
  );
}

Markdown.propTypes = markdownPropTypes;

export default Markdown;
// style={{ padding: 24 }}
