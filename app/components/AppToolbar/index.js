/**
*
* AppToolbar
*
*/

import React from 'react';

import AppBar from 'material-ui/AppBar';
import Breadcrumbs from 'react-breadcrumbs';
import Toolbar from 'material-ui/Toolbar';
import Layout from 'material-ui/Layout';
import Text from 'material-ui/Text';
import IconButton from 'material-ui/IconButton';

import classNames from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';

import Search from '../Search';
import ServerTime from '../ServerTime';
import Ripple from '../../components/Ripple';

import MenuIcon from '../../svg-icons/menu';
import ArrowIcon from '../../svg-icons/keyboard-arrow-right';

const styleSheet = createStyleSheet('zmoraAppToolbar', (theme) => ({
  toolbar: {
    transform: 'translate3d(0,0,0)',
    overflow: 'hidden',
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
}));

class AppToolbar extends React.Component {
  static propTypes = {
    username: React.PropTypes.string,
    routes: React.PropTypes.array.isRequired,
    params: React.PropTypes.object.isRequired,
    onToggleMenu: React.PropTypes.func.isRequired,
  };

  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
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
    const classes = this.context.styleManager.render(styleSheet);
    const toolbarClass = classNames({
      [classes.toolbarInSearch]: this.state.inSearch,
    }, classes.toolbar);

    return (
      <AppBar>
        <Toolbar className={toolbarClass} >
          <Ripple on={this.state.inSearch} centerX={this.state.rippleX} />
          <Layout item xs={2}>{!this.state.inSearch && <Text type="title" colorInherit >Zmora</Text>}</Layout>
          <Layout item container xs={6} align="center">
            <div style={{ transition: 'all 0.5s', flexGrow: this.state.inSearch ? 0.00001 : 1 }}>
              {!this.state.inSearch && <Breadcrumbs
                routes={this.props.routes}
                params={this.props.params}
                itemClass={classes.breadcrumbItem}
                activeItemClass={classes.activeBreadcrumbItem}
                separator={<ArrowIcon />}
              />}
            </div>
            <Search
              style={{ display: 'flex', transition: 'all 0.5s', flex: 2 }}
              onFocus={this.toggleSearch}
              onBlur={this.toggleSearch}
              onMouseMove={this.moveRipple}
            />
          </Layout>
          {!this.state.inSearch && <Layout item xs={2} style={{ textAlign: 'center' }}><ServerTime /></Layout>}
          {!this.state.inSearch && <Layout item xs={1}><Text colorInherit>{this.props.username}</Text></Layout>}
          {!this.state.inSearch && <Layout item xs={1}>
            <IconButton style={{ color: 'inherit' }} onClick={this.props.onToggleMenu}><MenuIcon /></IconButton>
          </Layout>}
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppToolbar;
