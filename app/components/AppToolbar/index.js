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

function AppToolbar(props) {
  return (
    <AppBar>
      <Toolbar>
        <Layout item xs={2}><Text type="title" colorInherit >Zmora</Text></Layout>
        <Layout item xs={2}><Breadcrumbs routes={props.routes} params={props.params} /></Layout>
        <Layout item xs={1} />
        <Layout item xs={3}><Search /></Layout>
        <Layout item xs={1} />
        <Layout item xs={2}><ServerTime /></Layout>
        <Layout item xs={1}><Text colorInherit>maxmati</Text></Layout>
      </Toolbar>
    </AppBar>
  );
}

AppToolbar.propTypes = {
  routes: React.PropTypes.array.isRequired,
  params: React.PropTypes.object.isRequired,
};

export default AppToolbar;
