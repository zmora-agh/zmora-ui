/**
 * Created by oszust on 08.05.17.
 */

import { PropTypes } from 'react';

export const COLUMN_PROP_TYPE = PropTypes.shape({
  id: PropTypes.node.isRequired,
  label: PropTypes.node,
});
