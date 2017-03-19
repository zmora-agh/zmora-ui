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
import Layout from 'material-ui/Layout';
import StatusPanel from '../../components/StatusPanel';
import InfoPanel from '../../components/InfoPanel';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Layout container style={{ margin: 0 }}>
          <Layout item xs={7}>
            <InfoPanel />
          </Layout>
          <Layout item xs={1}>
          </Layout>
          <Layout item xs={4}>
            <StatusPanel />
          </Layout>
        </Layout>
      </div>
    );
  }
}
