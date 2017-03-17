/**
*
* Search
*
*/

import React from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';

import SearchIcon from '../../svg-icons/search';

const styleSheet = createStyleSheet('Search', () => ({
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 2,
    padding: 5,
  },
  iconBox: {
    padding: '0px 10px',
  },
  input: {
    outlineWidth: 0,
    color: '#fff',
  },
}));

function Search(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div style={props.style} className={classes.root}>
      <SearchIcon />
      <input className={classes.input} placeholder="Search" onFocus={props.onFocus} onBlur={props.onBlur} />
    </div>
  );
}

Search.propTypes = {
  style: React.PropTypes.object,
  onFocus: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired,
};

Search.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

export default Search;
