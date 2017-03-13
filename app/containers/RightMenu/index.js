/**
*
* RightMenu
*
*/

import React from 'react';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Text';

import makeSelectRightMenu from './selectors';

import Settings from '../../svg-icons/settings';
import ExitToApp from '../../svg-icons/exit-to-app';

const RightMenu = (props) => {
  const { avatar, events, username, ...other } = props;
  return (
    <Paper {...other} >
      <div>
        <Avatar src={avatar} />
        <Text>{username}</Text>
      </div>
      <Divider />
      <div>
        {events.map((event) => (<p key={event.id}>{event.text}</p>))}
      </div>
      <Divider />
      <div>
        <IconButton><Settings /></IconButton>
        <IconButton><ExitToApp /></IconButton>
      </div>
    </Paper>);
};

RightMenu.propTypes = {
  open: React.PropTypes.bool.isRequired,
  events: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
  })).isRequired,
  avatar: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
};

const mapStateToProps = makeSelectRightMenu;

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(RightMenu);
