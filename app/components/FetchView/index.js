/**
*
* FetchView
*
*/

import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

function FetchView(props) {
  return props.children !== undefined ?
    props.children :
    <div style={{ textAlign: 'center', margin: '50px auto' }}><CircularProgress size={50} /></div>;
}

FetchView.propTypes = {
  children: React.PropTypes.node,
};

export default FetchView;
