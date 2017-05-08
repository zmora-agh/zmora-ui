import { PropTypes } from 'react';

export const submitsPropType = PropTypes.objectOf(PropTypes.shape({
  id: PropTypes.node.isRequired,
  date: PropTypes.object.isRequired,
  status: PropTypes.node.isRequired,
}));
