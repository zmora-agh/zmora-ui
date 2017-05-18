/**
*
* NavItem
*
*/

import React from 'react';
import { Link } from 'react-router';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

function NavListItem(props) {
  return (
    <Link to={props.to}>
      <ListItem button style={{ borderRadius: 2 }}>
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

NavListItem.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default NavListItem;
