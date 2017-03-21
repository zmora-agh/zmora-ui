import { PropTypes } from 'react';

export const submitsPropType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.node.isRequired,
  created: PropTypes.node.isRequired,
  status: PropTypes.node.isRequired,
}));
