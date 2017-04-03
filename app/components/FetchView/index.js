/**
*
* FetchView
*
*/

import React from 'react';
import FetchProgress from '../FetchProgress';

function FetchView(props) {
  return props.data ?
    React.createElement(props.node, props.data, {}) :
    <FetchProgress />;
}

FetchView.propTypes = {
  node: React.PropTypes.func.isRequired,
  data: React.PropTypes.object,
};

export default FetchView;
