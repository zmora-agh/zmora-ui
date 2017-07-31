/**
*
* RightMenu
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { createStyleSheet } from 'jss-theme-reactor';


import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import customPropTypes from 'material-ui/utils/customPropTypes';

import makeSelectRightMenu from './selectors';

import Settings from '../../svg-icons/settings';
import ExitToApp from '../../svg-icons/exit-to-app';
import { profilePage, logoutPage } from '../../local-urls';

const styleSheet = createStyleSheet('RightMenu', () => ({
  root: {
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  avatar: {
    margin: 15,
  },
  avatarText: {
    flex: 1,
    margin: 15,
  },
  button: {
    width: '100%',
  },
}));

const RightMenu = (props, context) => {
  const classes = context.styleManager.render(styleSheet);

  const { user, ...other } = props;
  return (
    <Paper {...other} className={classes.root}>
      <div style={{ flex: 1 }}>
        <Grid container align="center">
          <Avatar src={user.avatar} className={classes.avatar} />
          <Grid container direction="column" className={classes.avatarText}>
            <Typography>{user.name}</Typography>
            {/* <Typography>Points: 15</Typography> */}
          </Grid>
        </Grid>
        <Divider />
      </div>
      <div style={{ marginBottom: 64 }}>
        <Divider />
        <Grid container direction="row">
          <Grid item xs={6}>
            <Link to={profilePage()}>
              <IconButton className={classes.button} ><Settings /></IconButton>
            </Link>
          </Grid>
          <Grid item xs={6}><Link to={logoutPage()}><IconButton className={classes.button}>
            <ExitToApp />
          </IconButton></Link></Grid>
        </Grid>
      </div>
    </Paper>);
};

RightMenu.propTypes = {
  user: React.PropTypes.shape({
    name: React.PropTypes.string,
    nick: React.PropTypes.string,
    email: React.PropTypes.string,
    avatar: React.PropTypes.string,
  }).isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

RightMenu.contextTypes = {
  styleManager: customPropTypes.muiRequired,
  router: React.PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(makeSelectRightMenu, mapDispatchToProps)(RightMenu);
