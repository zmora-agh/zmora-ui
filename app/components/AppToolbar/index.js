/**
*
* AppToolbar
*
*/

import React from 'react';

import AppBar from 'material-ui/AppBar';
import Breadcrumbs from 'react-breadcrumbs';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

import classNames from 'classnames';
import { withStyles, createStyleSheet } from 'material-ui/styles';

// import Search from '../Search';
import ServerTime from '../../containers/ServerTime';
import SubmitButton from '../../containers/Submit/Button';
import Ripple from '../../components/Ripple';

import ArrowIcon from '../../svg-icons/keyboard-arrow-right';
import MoreIcon from '../../svg-icons/more-vert';

const styleSheet = createStyleSheet('zmoraAppToolbar', (theme) => ({
  toolbar: {
    transform: 'translate3d(0,0,0)',
    overflow: 'hidden',
    backgroundColor: '#673BB7',
  },
  toolbarInSearch: {
    color: theme.palette.text.primary,
  },
  breadcrumbItem: {
    textDecoration: 'none',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  activeBreadcrumbItem: {
    color: theme.palette.getContrastText(theme.palette.primary[500]),
  },
  titleLetter: {
    '&:first-letter': {
      font: '40pt Roboto',
    },
    textShadow: '1px 1px 1px rgba(0, 0, 0, 1)',
    font: '30pt Roboto',
  },
}));

@withStyles(styleSheet)
class AppToolbar extends React.Component {
  static propTypes = {
    routes: React.PropTypes.array.isRequired,
    params: React.PropTypes.object.isRequired,
    onToggleMenu: React.PropTypes.func.isRequired,
    loggedIn: React.PropTypes.bool.isRequired,
    classes: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      inSearch: false,
      rippleX: 0,
    };
    this.toggleSearch = this.toggleSearch.bind(this);
    this.moveRipple = this.moveRipple.bind(this);
  }

  toggleSearch() {
    this.setState({ inSearch: !this.state.inSearch });
  }

  moveRipple(e) {
    if (!this.state.inSearch) {
      this.setState({ rippleX: e.pageX - (window.innerWidth / 2) });
    }
  }

  render() {
    const classes = this.props.classes;
    const toolbarClass = classNames({
      [classes.toolbarInSearch]: this.state.inSearch,
    }, classes.toolbar);

    return (
      <AppBar>
        <Toolbar className={toolbarClass} >
          <Ripple on={this.state.inSearch} centerX={this.state.rippleX} />
          <Grid item xs={2}>
            <Typography color="inherit" className={classes.titleLetter}>Zmora</Typography>
          </Grid>
          {!this.state.inSearch ? <Grid item xs={7}>
            <Breadcrumbs
              routes={this.props.routes}
              params={this.props.params}
              itemClass={classes.breadcrumbItem}
              activeItemClass={classes.activeBreadcrumbItem}
              separator={<ArrowIcon />}
              excludes={['Home', 'Problems']}
            />
          </Grid> : undefined}
          <Grid container item spacing={0} xs={this.state.inSearch ? 10 : 3} justify="flex-end" align="center">
            {/* Remove search button since there is not search feature atm. */}
            {/* <Search */}
            {/* expanded={this.state.inSearch} */}
            {/* onFocus={this.toggleSearch} */}
            {/* onBlur={this.toggleSearch} */}
            {/* onMouseMove={this.moveRipple} */}
            {/* /> */}
            <ServerTime style={this.state.inSearch ? { display: 'none' } : {}} />
            {this.props.loggedIn &&
              <SubmitButton style={{ color: 'inherit', display: this.state.inSearch ? 'none' : 'block' }} />}
            <IconButton style={{ color: 'inherit' }} onClick={this.props.onToggleMenu}><MoreIcon /></IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppToolbar;
