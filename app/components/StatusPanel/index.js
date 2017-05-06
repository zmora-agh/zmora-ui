/**
*
* StatusPanelBeta
*
*/

import React from 'react';
import Typography from 'material-ui/Typography';
import { createStyleSheet } from 'jss-theme-reactor';
import { FormattedMessage } from 'react-intl';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Layout from 'material-ui/Layout';
import Card from '../ZmoraCard';
import messages from './messages';


const styleSheet = createStyleSheet('zmoraAppStatusStyleSheet', () => ({
  header: { color: '#ffffff', fontSize: 34 },
  dataElement: { 'margin-bottom': '6px' },
  logo: {
    width: '280px',
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
      <Typography type="headline" className={classes.header}><FormattedMessage {...messages.header} /></Typography>
      <Layout container className={classes.root}>
        <Layout container item xs={12}>
          <Layout item xs={12} className={classes.chart}>
            <img src={statusChart} className={classes.logo} alt="logo" />
          </Layout>
        </Layout>
        <Layout container item xs={13} className={classes.clusterInfoContainer} style={{ height: props.height }}>
          <Layout item xs={12} className={classes.clusterInfoItem}>
            <Typography className={classes.clusterInfoTitle}><FormattedMessage {...messages.details} /></Typography>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Typography style={{ fontSize: '47px' }}>60.0</Typography>
              <Typography style={{ marginLeft: '12px' }}>zadań / godzine</Typography>
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
