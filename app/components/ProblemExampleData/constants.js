import { PropTypes } from 'react';

export const examplesPropType = PropTypes.arrayOf(PropTypes.shape({
  input: PropTypes.node.isRequired,
  output: PropTypes.node.isRequired,
  reason: PropTypes.node.isRequired,
}));
