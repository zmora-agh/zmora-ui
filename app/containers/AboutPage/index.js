/* eslint-disable global-require */
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
import Avatar from 'material-ui/Avatar';

import messages from './messages';

const styleSheet = createStyleSheet('zmoraAboutPage', (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    maxWidth: 950,
    margin: '0 auto',
  },
  paper: {
    padding: 16,
    color: theme.palette.text.secondary,
  },
  bigAvatar: {
    margin: '0 auto',
    width: 150,
    height: 150,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
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
        <div className={classes.root}>
          <Layout container gutter={24}>
            <Layout item xs={12}>
              <FormattedMessage {...messages.title} />
            </Layout>
            <Layout item xs={12}>
              <FormattedMessage {...messages.aboutText} />
            </Layout>
            <Layout style={{ padding: 20 }} item xs={3}>
              <Avatar
                alt="Feels Man"
                src={require('../../img/avatar.png')}
                className={classes.bigAvatar}
              />
            </Layout>
            <Layout style={{ padding: 20 }} item xs={3}>
              <Avatar
                alt="Feels Man"
                src={require('../../img/avatar.png')}
                className={classes.bigAvatar}
              />
            </Layout>
            <Layout style={{ padding: 20 }} item xs={3}>
              <Avatar
                alt="Feels Man"
                src={require('../../img/avatar.png')}
                className={classes.bigAvatar}
              />
            </Layout>
            <Layout style={{ padding: 20 }} item xs={3}>
              <Avatar
                alt="Feels Man"
                src={require('../../img/avatar.png')}
                className={classes.bigAvatar}
              />
            </Layout>
            <Layout style={{ padding: 20 }} item xs={3}>
              <Avatar
                alt="Feels Man"
                src={require('../../img/avatar.png')}
                className={classes.bigAvatar}
              />
            </Layout>
            <Layout style={{ padding: 20 }} item xs={3}>
              <Avatar
                alt="Feels Man"
                src={require('../../img/avatar.png')}
                className={classes.bigAvatar}
              />
            </Layout>
            <Layout style={{ padding: 20 }} item xs={3}>
              <Avatar
                alt="Feels Man"
                src={require('../../img/avatar.png')}
                className={classes.bigAvatar}
              />
            </Layout>
            <Layout style={{ padding: 20 }} item xs={3}>
              <Avatar
                alt="Feels Man"
                src={require('../../img/avatar.png')}
                className={classes.bigAvatar}
              />
            </Layout>
            <Layout item xs={12}>
              <FormattedMessage {...messages.title} />
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
