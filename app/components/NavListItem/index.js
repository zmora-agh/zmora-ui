/**
*
* NavItem
*
*/

import React from 'react';
import { Link } from 'react-router';
import { ListItem } from 'material-ui/List';
import * as Colors from 'material-ui/styles/colors';

function NavListItem(props) {
  const borderRadiusSize = 2;
  const linkStyle = {
    textDecoration: 'none',
    borderRadius: borderRadiusSize,
  };
  const activeLinkStyle = {
    display: 'block',
    backgroundColor: Colors.grey200,
  };

  return (
    <Link to={props.to} style={linkStyle} activeStyle={activeLinkStyle}>
      <ListItem insetChildren primaryText={props.title} leftIcon={props.icon} style={{ borderRadius: borderRadiusSize }} />
    </Link>
  );
}

NavListItem.propTypes = {
  to: React.PropTypes.string.isRequired,
  title: React.PropTypes.object.isRequired,
  icon: React.PropTypes.object,
};

export default NavListItem;
