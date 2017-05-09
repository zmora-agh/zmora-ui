import { PropTypes } from 'react';

export const submitsPropType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.node.isRequired,
  date: PropTypes.object.isRequired,
  status: PropTypes.node.isRequired,
}));
