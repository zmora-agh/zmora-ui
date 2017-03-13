/**
*
* NavItem
*
*/

import React from 'react';
import { Link } from 'react-router';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

function NavListItem(props) {
  return (
    <Link to={props.to}>
      <ListItem button>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.title} />
      </ListItem>
    </Link>
  );
}

NavListItem.propTypes = {
  to: React.PropTypes.string.isRequired,
  title: React.PropTypes.object.isRequired,
  icon: React.PropTypes.object,
};

export default NavListItem;
