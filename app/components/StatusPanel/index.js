/**
*
* StatusPanelBeta
*
*/

import React from 'react';
import Text from 'material-ui/Text';
import { createStyleSheet } from 'jss-theme-reactor';
import { FormattedMessage } from 'react-intl';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Layout from 'material-ui/Layout';
import Card from '../ZmoraCard';
import messages from './messages';


const styleSheet = createStyleSheet('StatusStyleSheet', () => ({
  header: { color: '#ffffff', fontSize: 34 },
  dataElement: { 'margin-bottom': '6px' },
  logo: {
    width: '320px',
    height: '170px',
    margin: '0 auto',
  },
  chart: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  clusterInfoContainer: {
    backgroundColor: '#ffffff',
  },
  clusterInfoItem: {
    backgroundColor: '#ffffff',
  },
  clusterInfoTitle: {
    color: '#777777',
    fontSize: '18px',
    marginBottom: '20px',
  },
}));

const statusChart = require('../../resources/statusChart.png');

function StatusPanel(props, context) {
  const classes = context.styleManager.render(styleSheet);

  return (
    <Card height={props.height} color={props.color}>
      <Text type="headline" className={classes.header}><FormattedMessage {...messages.header} /></Text>
      <Layout container className={classes.root}>
        <Layout container item xs={12}>
          <Layout item xs={12} className={classes.chart}>
            <img src={statusChart} className={classes.logo} alt="logo" />
          </Layout>
        </Layout>
        <Layout container item xs={13} className={classes.clusterInfoContainer} style={{ height: props.height }}>
          <Layout item xs={12} className={classes.clusterInfoItem}>
            <Text className={classes.clusterInfoTitle}><FormattedMessage {...messages.details} /></Text>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={{ fontSize: '47px' }}>60.0</Text>
              <Text style={{ marginLeft: '12px' }}>zadań / godzine</Text>
            </div>
          </Layout>
        </Layout>
      </Layout>
    </Card>
  );
}

StatusPanel.propTypes = {
  height: React.PropTypes.number.isRequired,
  color: React.PropTypes.any,
};

StatusPanel.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

export default StatusPanel;
