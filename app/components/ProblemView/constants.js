import { PropTypes } from 'react';

export const problemContentPropTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  input: PropTypes.node.isRequired,
  output: PropTypes.node.isRequired,
};
