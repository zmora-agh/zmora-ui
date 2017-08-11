/**
*
* StatusPanelBeta
*
*/

import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { FormattedMessage } from 'react-intl';
import Grid from 'material-ui/Grid';
import ZmoraCard from '../ZmoraCard';
import messages from './messages';


const styleSheet = createStyleSheet('zmoraAppStatusStyleSheet', () => ({
  header: { color: '#ffffff', fontSize: 34 },
  headerContainer: {
    marginTop: 15,
    marginLeft: 15,
  },
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

function StatusPanel(props) {
  const classes = props.classes;

  return (
    <ZmoraCard padding={0} height={props.height} color={props.color}>
      <Grid container>
        <Grid container item xs={12} className={classes.headerContainer}>
          <Typography type="headline" className={classes.header}><FormattedMessage {...messages.header} /></Typography>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={12} className={classes.chart}>
            <img src={statusChart} className={classes.logo} alt="logo" />
          </Grid>
        </Grid>
        <Grid
          container
          item xs={12}
          className={classes.clusterInfoContainer}
          style={{ height: props.height, paddingLeft: 30 }}
        >
          <Grid item xs={12} className={classes.clusterInfoItem}>
            <Typography className={classes.clusterInfoTitle}><FormattedMessage {...messages.details} /></Typography>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Typography style={{ fontSize: '47px' }}>60.0</Typography>
              <Typography style={{ marginLeft: '12px' }}>zadań / godzine</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </ZmoraCard>
  );
}

StatusPanel.propTypes = {
  height: React.PropTypes.number.isRequired,
  color: React.PropTypes.any,
  classes: React.PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(StatusPanel);
