/**
*
* RightMenu
*
*/

import React from 'react';
import { connect } from 'react-redux';

import { createStyleSheet } from 'jss-theme-reactor';


import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Layout from 'material-ui/Layout';
import customPropTypes from 'material-ui/utils/customPropTypes';

import makeSelectRightMenu from './selectors';

import Settings from '../../svg-icons/settings';
import ExitToApp from '../../svg-icons/exit-to-app';
import { logout } from '../App/actions';

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

  const { rightMenu, user, dispatch, ...other } = props;
  return (
    <Paper {...other} className={classes.root}>
      <div style={{ flex: 1 }}>
        <Layout container align="center">
          <Avatar src={user.avatar} className={classes.avatar} />
          <Layout container direction="column" className={classes.avatarText}>
            <Typography>{user.name}</Typography>
            <Typography>Points: 15</Typography>
          </Layout>
        </Layout>
        <Divider />
        <div style={{ padding: 15 }}>
          {rightMenu.events.map((event) => (<p key={event.id}>{event.text}</p>))}
        </div>
      </div>
      <div style={{ marginBottom: 64 }}>
        <Divider />
        <Layout container direction="row">
          <Layout item xs={6}><IconButton className={classes.button}><Settings /></IconButton></Layout>
          <Layout item xs={6}><IconButton className={classes.button} onClick={() => dispatch(logout())}>
            <ExitToApp />
          </IconButton></Layout>
        </Layout>
      </div>
    </Paper>);
};

RightMenu.propTypes = {
  rightMenu: React.PropTypes.shape({
    events: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number,
      text: React.PropTypes.string,
    })),
  }).isRequired,
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
};

const mapStateToProps = makeSelectRightMenu;

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RightMenu);
