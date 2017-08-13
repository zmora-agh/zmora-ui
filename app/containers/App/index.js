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
import { FormattedMessage } from 'react-intl';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Dialog, { DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';

import { haveJwtToken } from '../../utils/auth';

import AppToolbar from '../../components/AppToolbar';
import Navigation from '../../components/Navigation';
import RightMenu from '../RightMenu';
import TimeProvider from '../TimeProvider';
import Submit from '../Submit';

import { makeSelectApp } from './selectors';
import { clearFatalError } from './actions';
import messages from './messages';

const styleSheet = createStyleSheet('App', () => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: 16,
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
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  },
}));

class App extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
    routes: React.PropTypes.array.isRequired,
    params: React.PropTypes.object.isRequired,
    user: React.PropTypes.object,
    fatalError: React.PropTypes.bool,
    dispatch: React.PropTypes.func,
    classes: React.PropTypes.object.isRequired,
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
    const classes = this.props.classes;
    const rightMenuTranslation = this.state.rightMenuOpen ? 0 : 100;
    const rightMenuSize = this.state.rightMenuOpen ? 2 : 0;
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
        <Grid container spacing={0} style={{ marginTop: 64 }}>
          <Grid item xs={12 - rightMenuSize} md={3}><Navigation style={{ padding: 10 }} /></Grid>
          <Grid item xs={12 - rightMenuSize} md={9 - rightMenuSize} className={classes.contentContainer}>
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
        <Dialog open={this.props.fatalError} onRequestClose={() => this.props.dispatch(clearFatalError())}>
          <DialogTitle><FormattedMessage {...messages.fatalErrorTitle} /></DialogTitle>
          <DialogContent>
            <DialogContentText><FormattedMessage {...messages.fatalErrorBody} /></DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = makeSelectApp;

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default withStyles(styleSheet)(connect(mapStateToProps, mapDispatchToProps)(App));
