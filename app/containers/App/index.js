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

import Layout from 'material-ui/Layout';
import AppToolbar from '../../components/AppToolbar';
import RightMenu from '../RightMenu';
import Navigation from '../../../app/components/Navigation';


const styleSheet = createStyleSheet('App', () => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
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
  };

  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  };

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
        <AppToolbar {...this.props} username="maxmati" onToggleMenu={this.toggleMenu} />
        <Layout container gutter={0} style={{ marginTop: 64 }}>
          <Layout item xs={2}><Navigation style={{ margin: 10 }} /></Layout>
          <Layout item xs={this.state.rightMenuOpen ? 7 : 9} className={classes.contentContainer}>
            {React.Children.toArray(this.props.children)}
          </Layout>
          <Layout
            item xs={2}
            className={classes.rightMenu}
            style={{ transform: `translate(${rightMenuTranslation}%, 0)` }}
          >
            <RightMenu />
          </Layout>
        </Layout>
      </div>
    );
  }
}
