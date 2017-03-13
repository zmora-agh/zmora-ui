/**
*
* NavItem
*
*/

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

function NavListItem(props, context) {
  return (
    <ListItem button style={{ borderRadius: 2 }} onClick={() => context.router.push(props.to)}>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.title} />
    </ListItem>
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
