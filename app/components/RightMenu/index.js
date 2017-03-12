/**
*
* RightMenu
*
*/

import React from 'react';
// import styled from 'styled-components';

import Settings from 'material-ui/svg-icons/action/settings';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import Subheader from 'material-ui/Subheader';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function RightMenu() {
  return (
    <Drawer open openSecondary style={{ position: 'relative' }}>
      <AppBar />
      <List>
        <ListItem
          leftAvatar={
            <Avatar
              src="http://www.material-ui.com/images/uxceo-128.jpg"
            />
          }
        >
          Maxmati
        </ListItem>
        <Divider />
        <Subheader><FormattedMessage {...messages.events} /></Subheader>
        <ListItem>
          <p>New exercise in contest PWiR</p>
          <p>New exercise in contest PWiR</p>
          <p>New exercise in contest PWiR</p>
          <p>New exercise in contest PWiR</p>
        </ListItem>
        <Divider />
        <BottomNavigation style={{ position: 'absolute', bottom: 0 }}>
          <BottomNavigationItem
            label="Settings"
            icon={<Settings />}
          />
          <BottomNavigationItem
            label="Logout"
            icon={<ExitToApp />}
          />
        </BottomNavigation>
      </List>
    </Drawer>
  );
}

RightMenu.propTypes = {

};

export default RightMenu;
