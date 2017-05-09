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
import Button from 'material-ui/Button';

import classNames from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';

import '!style-loader!css-loader!../../fonts/index.css';

import Search from '../Search';
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
      font: '56pt Sanctuary',
    },
    textShadow: '1px 1px 1px rgba(0, 0, 0, 1)',
    font: '38pt Sanctuary',
    marginLeft: '32px',
    marginBottom: '20px',
  },
  loginButton: {
    '&:hover': {
      backgroundColor: '#7767C7',
    },
    backgroundColor: '#6652B7',
    marginLeft: '10px',
    color: 'inherit',
  },
}));

class AppToolbar extends React.Component {
  static propTypes = {
    routes: React.PropTypes.array.isRequired,
    params: React.PropTypes.object.isRequired,
    onToggleMenu: React.PropTypes.func.isRequired,
    username: React.PropTypes.string.isRequired,
  };

  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
    router: React.PropTypes.object.isRequired,
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

  generateIconPanel() {
    const classes = this.context.styleManager.render(styleSheet);
    let result;
    if (this.props.username === '') {
      result = (
        <Button
          raised
          className={classes.loginButton}
          onClick={() => this.context.router.push('/auth')}
          style={{ display: this.state.inSearch ? 'none' : 'block' }}
        >
          Zaloguj się
        </Button>
      );
    } else {
      result = (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <SubmitButton style={{ color: 'inherit', display: this.state.inSearch ? 'none' : 'block' }} />
          <IconButton style={{ color: 'inherit' }} onClick={this.props.onToggleMenu}><MoreIcon /></IconButton>
        </div>
      );
    }
    return result;
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
            <Text colorInherit className={classes.titleLetter}>Zmora</Text>
          </Layout>
          {!this.state.inSearch ? <Layout item xs={7}>
            <Breadcrumbs
              routes={this.props.routes}
              params={this.props.params}
              itemClass={classes.breadcrumbItem}
              activeItemClass={classes.activeBreadcrumbItem}
              separator={<ArrowIcon />}
              excludes={['Home']}
            />
          </Layout> : undefined}
          <Layout container item gutter={0} xs={this.state.inSearch ? 10 : 3} justify="flex-end" align="center">
            <Search
              expanded={this.state.inSearch}
              onFocus={this.toggleSearch}
              onBlur={this.toggleSearch}
              onMouseMove={this.moveRipple}
            />
            <ServerTime style={this.state.inSearch ? { display: 'none' } : {}} />
            {this.generateIconPanel()}
          </Layout>
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppToolbar;
