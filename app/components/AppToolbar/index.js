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

import Menu from '../../svg-icons/menu';

const styleSheet = createStyleSheet('zmoraAppToolbar', (theme) => ({
  toolbar: {
    transform: 'translate3d(0,0,0)',
    overflow: 'hidden',
  },
  toolbarInSearch: {
    color: theme.palette.text.primary,
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
    };
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch() {
    this.setState({ inSearch: !this.state.inSearch });
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);
    const toolbarClass = classNames({
      [classes.toolbarInSearch]: this.state.inSearch,
    }, classes.toolbar);

    return (
      <AppBar>
        <Toolbar className={toolbarClass} >
          <Ripple on={this.state.inSearch} />
          <Layout item xs={2}><Text type="title" colorInherit >Zmora</Text></Layout>
          <Layout item container xs={4}>
            <div style={{ transition: 'all 0.5s', flexGrow: this.state.inSearch ? 0.00001 : 1 }}>
              {!this.state.inSearch && <Breadcrumbs routes={this.props.routes} params={this.props.params} />}
            </div>
            <Search
              style={{ transition: 'all 0.5s', flex: 2 }}
              onFocus={this.toggleSearch}
              onBlur={this.toggleSearch}
            />
          </Layout>
          <Layout item xs={1} />
          <Layout item xs={2}><ServerTime /></Layout>
          <Layout item xs={1}><Text colorInherit>{this.props.username}</Text></Layout>
          <Layout item xs={1}>
            <IconButton onClick={this.props.onToggleMenu}><Menu /></IconButton>
          </Layout>
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppToolbar;
