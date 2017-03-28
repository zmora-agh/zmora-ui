/**
 * Created by maxmati on 3/20/17.
 */

import { fromJS } from 'immutable';


const initialState = fromJS({
  content: {
    description: [
      '# Zadanie 1 \n   Changes  are automatically rendered as you type.\n\n* Follows the ',
      '[CommonMark](http://commonmark.org/) spec\n* Renders actual, "native" React DOM ',
      'elements\n* Allows you to escape or skip HTML (try toggling the checkboxes above)',
      '\n* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n',
      '\n## HTML block below\n\n<blockquote>\n    This blockquote will change based ',
      'on the HTML settings above.\n</blockquote>\n\n## How about some code?\n',
      '```js\nvar React = require(\'react\');\nvar Markdown = require(\'react-markdown\');',
      '\n\nReact.render(\n    <Markdown source="# Your markdown here" />,\n    document.',
      'getElementById(\'content\')\n);\n```\n\nPretty neat, eh?\n\n', '## More info?\n\n',
      'Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)\n\n',
      '---------------\n\n',
      'Normal code in standard, single ticks: `this is code`, `tex \\TeX` inline code: `tex x^2`\n',
      'and `tex \\TeX` block:\n```tex\na^2+b^2=c^2\n```\n\n',
      'A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal',
    ].join(''),
  },
  examples: [
    {
      input: 'foo\nbar\nbaz',
      output: '1\n2\n666',
      reason: 'Szatan czyste zło',
    },
    {
      input: 'foo\nbar\nbaz',
      output: '1\n2\n666',
      reason: 'Szatan czyste zło',
    },
    {
      input: 'foo\nbar\nbaz',
      output: '1\n2\n666',
      reason: 'Szatan czyste zło',
    },
  ],
  submits: [
    { id: 123, created: '11 minutes ago', status: 'ANS' },
    { id: 124, created: '11 minutes ago', status: 'ANS' },
  ],
});

function contestsPageReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default contestsPageReducer;
