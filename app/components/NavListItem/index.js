/**
*
* NavItem
*
*/

import React from 'react';
import { Link } from 'react-router';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('zmoraNavListItem', (theme) => ({
  [theme.breakpoints.between('sm', 'sm')]: {
    listItemTextText: {
      display: 'inline-block',
    },
    listItemTextRoot: {
      flex: 'unset',
    },
    listItemRoot: {
      display: 'inline-flex',
    },
    link: {
      display: 'inline-flex',
      flex: '1 1 auto',
    },
  },
}));

function NavListItem(props) {
  const { to, classes, icon, title } = props;
  return (
    <Link to={to} className={classes.link}>
      <ListItem button classes={{ root: classes.listItemRoot }}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} classes={{ text: classes.listItemTextText, root: classes.listItemTextRoot }} />
      </ListItem>
    </Link>
  );
}

NavListItem.propTypes = {
  to: React.PropTypes.string.isRequired,
  title: React.PropTypes.object.isRequired,
  icon: React.PropTypes.object,
  classes: React.PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(NavListItem);
