/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import Menu from '../../svg-icons/menu';
import RightMenu from '../RightMenu';
import { toggleMenu } from '../RightMenu/actions';
import Navigation from './../../../app/components/Navigation';

const styleSheet = createStyleSheet('App', () => ({
  root: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  navigation: {
    margin: 20,
    width: 200,
    flex: 'initial',
  },
  appContainer: {
    display: 'flex',
    flex: '1 1 auto',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    margin: '28px 28px 28px 8px',
  },
  rightMenu: {
    width: 256,
    minHeight: '100%',
  },
}));

function App(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Text type="title" colorInherit className={classes.flex}>Zmora</Text>
          <IconButton contrast onClick={() => props.dispatch(toggleMenu())}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.appContainer} >
        <Navigation className={classes.navigation} />
        <div className={classes.contentContainer}>
          {React.Children.toArray(props.children)}
        </div>
        <RightMenu className={classes.rightMenu} />
      </div>
    </div>
  );
}

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  children: React.PropTypes.node.isRequired,
};

App.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

const mapStateToProps = () => ({});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
