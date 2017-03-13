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
import Breadcrumbs from 'react-breadcrumbs';
import customPropTypes from 'material-ui/utils/customPropTypes';

import AppBar from 'material-ui/AppBar';
import Layout from 'material-ui/Layout';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import RightMenu from '../RightMenu';
import Navigation from '../../../app/components/Navigation';

const styleSheet = createStyleSheet('App', () => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  contentWrapper: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 8,
  },
  rightMenu: {
    position: 'fixed',
    right: 0,
    height: '100%',
    paddingLeft: 24,
  },
}));

export default function App(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <AppBar style={{ position: 'fixed' }}>
        <Toolbar>
          <Layout item xs={2}><Text type="title" colorInherit className={classes.flex}>Zmora</Text></Layout>
          <Layout item xs={6}><Breadcrumbs routes={props.routes} params={props.params} /></Layout>
          <Layout item xs={3}><Text colorInherit>Server time: 13:37:66</Text></Layout>
          <Layout item xs={1}><Text colorInherit>maxmati</Text></Layout>
        </Toolbar>
      </AppBar>
      <Layout container gutter={0} style={{ marginTop: 64 }}>
        <Layout item xs={2}><Navigation style={{ margin: 8 }} /></Layout>
        <Layout item xs={8} className={classes.contentWrapper}>
          {React.Children.toArray(props.children)}
        </Layout>
        <Layout item xs={2} className={classes.rightMenu}><RightMenu /></Layout>
      </Layout>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node.isRequired,
  routes: React.PropTypes.array.isRequired,
  params: React.PropTypes.object.isRequired,
};

App.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};
