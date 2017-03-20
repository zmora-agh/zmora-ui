/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Paper from 'material-ui/Paper';
import Layout from 'material-ui/Layout';
import StatusPanel from '../../components/StatusPanel';
import InfoPanel from '../../components/InfoPanel';
import HomeNewsPanel from '../../components/HomeNewsPanel';
import Changelog1 from '../../components/HomeNewsPanel/News/Changelog1';
import Changelog2 from '../../components/HomeNewsPanel/News/Changelog2';
import Info from '../../components/HomeNewsPanel/News/Info';

function HomePage() {
  return (
    <Paper style={{ padding: '3em 2em', textAlign: 'justify' }}>
      <Layout container>
        <Layout item xs={7}>
          <InfoPanel />
        </Layout>
        <Layout item xs={1}>
        </Layout>
        <Layout item xs={4}>
          <StatusPanel />
        </Layout>
        <Layout item xs={12}>
          <HomeNewsPanel date="20.03.2017" title="Informacje Bieżące" content={<Info />} />
        </Layout>
        <Layout item xs={12}>
          <HomeNewsPanel date="20.03.2017" title="Changelog #2" content={<Changelog2 />} />
        </Layout>
        <Layout item xs={12}>
          <HomeNewsPanel date="15.03.2017" title="Changelog #1" content={<Changelog1 />} />
        </Layout>
      </Layout>
    </Paper>
  );
}

export default HomePage;
