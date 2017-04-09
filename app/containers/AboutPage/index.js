/*
 *
 * AboutPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Layout from 'material-ui/Layout';
import Paper from 'material-ui/Paper';

import messages from './messages';

const styleSheet = createStyleSheet('zmoraAboutPage', (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  };


  render() {
    const classes = this.context.styleManager.render(styleSheet);
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <span style={{padding: 10, background: '#FFFFFF' }}><FormattedMessage {...messages.aboutUs}/></span>
        <div className={classes.root}>
          <Layout container gutter={24}>
            <Layout item xs={12}>
              <Paper className={classes.paper}>
                xs=12
              </Paper>
            </Layout>
            <Layout item xs={6}>
              <Paper className={classes.paper}>
                xs=6
              </Paper>
            </Layout>
            <Layout item xs={6}>
              <Paper className={classes.paper}>
                xs=6
              </Paper>
            </Layout>
            <Layout item xs={3}>
              <Paper className={classes.paper}>
                xs=3
              </Paper>
            </Layout>
            <Layout item xs={3}>
              <Paper className={classes.paper}>
                xs=3
              </Paper>
            </Layout>
            <Layout item xs={3}>
              <Paper className={classes.paper}>
                xs=3
              </Paper>
            </Layout>
            <Layout item xs={3}>
              <Paper className={classes.paper}>
                xs=3
              </Paper>
            </Layout>
          </Layout>
        </div>
      </div>
    );
  }
}

AboutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AboutPage);
