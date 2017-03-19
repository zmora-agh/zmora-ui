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

import ArrowIcon from '../../svg-icons/keyboard-arrow-right';
import MoreIcon from '../../svg-icons/more-vert';

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
          <Layout item xs={2}>
            <Text type="title" colorInherit>Zmora</Text>
          </Layout>
          {!this.state.inSearch ? <Layout item xs={7}>
            <Breadcrumbs
              routes={this.props.routes}
              params={this.props.params}
              itemClass={classes.breadcrumbItem}
              activeItemClass={classes.activeBreadcrumbItem}
              separator={<ArrowIcon />}
            />
          </Layout> : undefined}
          <Layout container item gutter={0} xs={this.state.inSearch ? 10 : 3} justify="flex-end" align="center">
            <Search
              expanded={this.state.inSearch}
              onFocus={this.toggleSearch}
              onBlur={this.toggleSearch}
              onMouseMove={this.moveRipple}
            />
            <ServerTime style={this.state.inSearch ? { visibility: 'hidden' } : {}} />
            <IconButton style={{ color: 'inherit' }} onClick={this.props.onToggleMenu}><MoreIcon /></IconButton>
          </Layout>
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppToolbar;
