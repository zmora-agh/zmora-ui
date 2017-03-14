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
    display: 'flex',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 2,
    padding: 5,
  },
  iconBox: {
    padding: '0px 10px',
  },
  input: {
    width: '100%',
    outlineWidth: 0,
    color: '#fff',
  },
}));

function Search(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <div className={classes.iconBox}><SearchIcon /></div>
      <input className={classes.input} placeholder="Search" />
    </div>
  );
}

Search.propTypes = {

};

Search.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

export default Search;
