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
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';

import AppBar from 'material-ui/AppBar';
import Layout from 'material-ui/Layout';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import RightMenu from '../RightMenu';
import Navigation from './../../../app/components/Navigation';

const styleSheet = createStyleSheet('App', () => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  appBar: {
    position: 'fixed',
  },
  rightMenu: {
    position: 'fixed',
    right: 0,
    width: '100%',
    height: '100%',
    paddingRight: 0,
    paddingTop: 0,
    paddingLeft: 15,
  },
}));

export default function App(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Text type="title" colorInherit>Zmora</Text>
        </Toolbar>
      </AppBar>
      <Layout container gutter={0} style={{ marginTop: 64 }}>
        <Layout item xs={2}><Navigation style={{ margin: 10 }} /></Layout>
        <Layout item xs={7} style={{ paddingTop: 10 }}>{React.Children.toArray(props.children)}</Layout>
        <Layout item xs={2} className={classes.rightMenu}><RightMenu /></Layout>
      </Layout>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node.isRequired,
};

App.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};
