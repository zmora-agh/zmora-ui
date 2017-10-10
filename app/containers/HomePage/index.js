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
import { FormattedMessage } from 'react-intl';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import ZmoraCard from '../../components/ZmoraCard';
import messages from './messages';

const styleSheet = createStyleSheet('zmoraAppHomePageGrid', () => ({
  paper: {
    padding: '0em 1em',
    textAlign: 'justify',
    backgroundColor: '#DDDDDD',
  },
  lightTextStyle: {
    color: '#FFFFFF',
    lineHeight: '35px',
    fontSize: 30,
  },
  darkTextStyle: {
    color: '#000000',
    lineHeight: '35px',
    fontSize: 30,
  },
  logoStyle: {
    height: '100%',
    width: '100%',
    margin: '0 auto',
  },
}));

const logo = require('../../resources/logo.jpg');
const cardPadding = 30;
const descriptionColor = '#2196F3';
const logoPaneColor = '#4CB050';
const namePaneColor = '#FEC106';

function HomePage(props) {
  const classes = props.classes;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <ZmoraCard color={descriptionColor} padding={cardPadding}>
          <Typography className={classes.lightTextStyle}>
            <FormattedMessage {...messages.zmoraDescription} />
          </Typography>
        </ZmoraCard>
      </Grid>
      <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
        <ZmoraCard color={logoPaneColor} padding={cardPadding}>
          <img src={logo} className={classes.logoStyle} alt="logo" />
        </ZmoraCard>
      </Grid>
      <Grid item xs={12} sm={8}>
        <ZmoraCard color={namePaneColor} padding={cardPadding}>
          <Typography className={classes.darkTextStyle}>
            <FormattedMessage {...messages.nameOrigin} />
          </Typography>
        </ZmoraCard>
      </Grid>
    </Grid>
  );
}

HomePage.propTypes = {
  classes: React.PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(HomePage);
