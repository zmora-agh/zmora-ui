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
import IconButton from 'material-ui/IconButton';
import Text from 'material-ui/Text';
import RightMenu from '../RightMenu';

import Navigation from '../../../app/components/Navigation';

import Menu from '../../svg-icons/menu';

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
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  },
  contentContainer: {
    padding: 10,
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  },
}));

export default class App extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
    routes: React.PropTypes.array.isRequired,
    params: React.PropTypes.object.isRequired,
  }

  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  }

  constructor(props) {
    super(props);
    this.state = { rightMenuOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ rightMenuOpen: !this.state.rightMenuOpen });
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);
    const rightMenuTranslation = this.state.rightMenuOpen ? 0 : 100;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Layout item xs={2}><Text type="title" colorInherit className={classes.flex}>Zmora</Text></Layout>
            <Layout item xs={6}><Breadcrumbs routes={this.props.routes} params={this.props.params} /></Layout>
            <Layout item xs={2}><Text colorInherit>Server time: 13:37:66</Text></Layout>
            <Layout item xs={1}><Text colorInherit>maxmati</Text></Layout>
            <Layout item xs={1}>
              <IconButton className={classes.button} onClick={this.toggleMenu}><Menu /></IconButton>
            </Layout>

          </Toolbar>
        </AppBar>
        <Layout container gutter={0} style={{ marginTop: 64 }}>
          <Layout item xs={2}><Navigation style={{ margin: 10 }} /></Layout>
          <Layout item xs={this.state.rightMenuOpen ? 7 : 9} className={classes.contentContainer}>
            {React.Children.toArray(this.props.children)}
          </Layout>
          <Layout
            item xs={2} className={classes.rightMenu} style={{ transform: `translate(${rightMenuTranslation}%, 0)` }}
          >
            <RightMenu />
          </Layout>
        </Layout>
      </div>
    );
  }
}
