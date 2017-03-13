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
import Layout from 'material-ui/Layout';
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
      <Layout container gutter={24}>
        <Layout item xs={2}><Navigation style={{ margin: 10 }} /></Layout>
        <Layout item xs={7}>{React.Children.toArray(props.children)}</Layout>
        <Layout item xs={3}><RightMenu /></Layout>
      </Layout>
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
