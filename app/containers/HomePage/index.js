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
      </Layout>
    </Paper>
  );
}

export default HomePage;
