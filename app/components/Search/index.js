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

class Search extends React.PureComponent {
  static propTypes = {
    style: React.PropTypes.object,
    expanded: React.PropTypes.bool,
    onFocus: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func.isRequired,
    onMouseMove: React.PropTypes.func,
  };

  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.expanded && this.props.expanded) {
      this.input.focus();
    }
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);
    const rootClass = classNames({
      [classes.root]: this.props.expanded,
    });
    return (
      <div style={this.props.style} className={rootClass} onMouseMove={this.props.onMouseMove}>
        {this.props.expanded ? <SearchIcon /> :
        <IconButton style={{ color: 'inherit' }} onClick={this.props.onFocus}><SearchIcon /></IconButton>}

        {this.props.expanded ? <input
          ref={(input) => { this.input = input; }}
          className={classes.input}
          placeholder="Search"
          onBlur={this.props.onBlur}
        /> : undefined}
      </div>
    );
  }
}

export default Search;
