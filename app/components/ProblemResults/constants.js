/**
 * Created by oszust on 28.05.17.
 */

import { PropTypes } from 'react';

export const authorPropType = PropTypes.shape({
  id: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
});

export const problemResultsPropType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.node.isRequired,
  author: authorPropType,
  date: PropTypes.node.isRequired,
  status: PropTypes.node.isRequired,
}));
