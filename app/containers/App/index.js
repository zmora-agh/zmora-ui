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

import Grid from 'material-ui/Grid';

import { haveJwtToken } from '../../utils/auth';

import AppToolbar from '../../components/AppToolbar';
import Navigation from '../../components/Navigation';
import RightMenu from '../RightMenu';
import TimeProvider from '../TimeProvider';
import Submit from '../Submit';

import { makeSelectApp } from './selectors';

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
    width: '100%',
    height: '100%',
    paddingRight: 0,
    paddingTop: 0,
    paddingLeft: 0,
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  },
  contentContainer: {
    padding: 10,
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  },
}));

class App extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
    routes: React.PropTypes.array.isRequired,
    params: React.PropTypes.object.isRequired,
    user: React.PropTypes.object,
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
        <TimeProvider />
        <AppToolbar
          routes={this.props.routes}
          params={this.props.params}
          username={this.props.user.nick}
          onToggleMenu={this.toggleMenu}
          loggedIn={haveJwtToken()}
        />
        <Grid container gutter={0} style={{ marginTop: 64 }}>
          <Grid item xs={2}><Navigation style={{ padding: 10 }} /></Grid>
          <Grid item xs={this.state.rightMenuOpen ? 8 : 10} className={classes.contentContainer}>
            {React.Children.toArray(this.props.children)}
          </Grid>
          <Grid
            item xs={2}
            className={classes.rightMenu}
            style={{ transform: `translate(${rightMenuTranslation}%, 0)` }}
          >
            <RightMenu />
          </Grid>
        </Grid>
        {haveJwtToken() && <Submit />}
      </div>
    );
  }
}

const mapStateToProps = makeSelectApp;

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
