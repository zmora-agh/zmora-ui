/**
*
* RightMenu
*
*/

import React from 'react';
import { connect } from 'react-redux';

import Settings from 'material-ui/svg-icons/action/settings';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import makeSelectRightMenu from './selectors';
import { toggleMenu } from './actions';

const RightMenu = (props) => (
  <Drawer open={props.open} openSecondary style={{ position: 'relative' }}>
    <AppBar
      onLeftIconButtonTouchTap={() => props.dispatch(toggleMenu())}
    />
    <List>
      <ListItem
        leftAvatar={
          <Avatar src={props.avatar} />
        }
      >
        {props.username}
      </ListItem>
      <Divider />
      <div style={{ margin: 15 }}>
        {props.events.map((event) => (<p key={event.id}>{event.text}</p>))}
      </div>
      <Divider />
      <BottomNavigation style={{ position: 'absolute', bottom: 0 }}>
        <BottomNavigationItem
          label={<FormattedMessage {...messages.settings} />}
          icon={<Settings />}
        />
        <BottomNavigationItem
          label={<FormattedMessage {...messages.logout} />}
          icon={<ExitToApp />}
        />
      </BottomNavigation>
    </List>
  </Drawer>);

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

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RightMenu);
