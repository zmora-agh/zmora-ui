/**
*
* Search
*
*/

import React from 'react';
import IconButton from 'material-ui/IconButton';

import classNames from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import { easing } from 'material-ui/styles/transitions';


import SearchIcon from '../../svg-icons/search';

const styleSheet = createStyleSheet('zmoraSearch', () => ({
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 2,
    padding: 5,
    display: 'flex',
    transition: `all 1s  ${easing.easeInOut}`,
    flex: 2,
  },
  iconBox: {
    padding: '0px 10px',
  },
  input: {
    outlineWidth: 0,
    width: '100%',
  },
}));

function Search(props, context) {
  const classes = context.styleManager.render(styleSheet);
  const rootClass = classNames({
    [classes.root]: props.expanded,
  });
  return (
    <div style={props.style} className={rootClass} onMouseMove={props.onMouseMove} >
      {props.expanded ? <SearchIcon /> : <IconButton style={{ color: 'inherit' }} onClick={props.onFocus}><SearchIcon /></IconButton>}
      {props.expanded ? <input
        className={classes.input}
        placeholder="Search"
        onBlur={props.onBlur}
      /> : undefined}
    </div>
  );
}

Search.propTypes = {
  style: React.PropTypes.object,
  expanded: React.PropTypes.bool,
  onFocus: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired,
  onMouseMove: React.PropTypes.func,
};

Search.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

export default Search;
