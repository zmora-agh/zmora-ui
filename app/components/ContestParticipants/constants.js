import { PropTypes } from 'react';

export const participationsPropTypes =
  PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequried,
    }).isRequired,
    joined: PropTypes.string.isRequired,
  }).isRequired);
