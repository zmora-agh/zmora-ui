/**
*
* FetchProgress
*
*/

import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

function FetchProgress() {
  return <div style={{ textAlign: 'center', margin: '50px auto' }}><CircularProgress size={50} /></div>;
}

export default FetchProgress;
