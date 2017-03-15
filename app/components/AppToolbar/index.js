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

import Search from '../Search';
import ServerTime from '../ServerTime';

class AppToolbar extends React.Component {
  static propTypes = {
    username: React.PropTypes.string,
    routes: React.PropTypes.array.isRequired,
    params: React.PropTypes.object.isRequired,
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
    return (
      <AppBar>
        <Toolbar>
          <Layout item xs={2}><Text type="title" colorInherit >Zmora</Text></Layout>
          <Layout item xs={2} style={{ display: this.state.inSearch ? 'none' : 'block' }}>
            <Breadcrumbs routes={this.props.routes} params={this.props.params} />
          </Layout>
          <Layout item xs={this.state.inSearch ? 6 : 4}>
            <Search onFocus={this.toggleSearch} onBlur={this.toggleSearch} />
          </Layout>
          <Layout item xs={1} />
          <Layout item xs={2}><ServerTime /></Layout>
          <Layout item xs={1}><Text colorInherit>{this.props.username}</Text></Layout>
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppToolbar;
