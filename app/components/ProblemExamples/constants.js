import { PropTypes } from 'react';

export const examplesPropType = PropTypes.arrayOf(PropTypes.shape({
  input: PropTypes.node.isRequired,
  result: PropTypes.node.isRequired,
  explanation: PropTypes.node.isRequired,
}));
