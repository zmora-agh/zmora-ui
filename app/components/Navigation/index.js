/**
*
* Navigation
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';

import { List } from 'material-ui/List';

// Icons
import Home from '../../svg-icons/home';
import Announcement from '../../svg-icons/announcement';
import Assignment from '../../svg-icons/assignment';
import ActionInfo from '../../svg-icons/info';

import NavListItem from '../NavListItem';
import messagesHomePage from '../../containers/HomePage/messages';
import messagesContestsPage from '../../containers/ContestsPage/messages';
import messagesAboutPage from '../../containers/AboutPage/messages';
import messagesProblemPage from '../../containers/ProblemPage/messages';


function Navigation(props) {
  return (
    <List {...props} >
      <NavListItem to="/" icon={<Home />} title={<FormattedMessage {...messagesHomePage.title} />} />
      <NavListItem to="/contests" icon={<Assignment />} title={<FormattedMessage {...messagesContestsPage.title} />} />
      <NavListItem
        to="/contests/2/problems/30"
        icon={<Announcement />}
        title={<FormattedMessage {...messagesProblemPage.title} />}
      />
      <NavListItem to="/about" icon={<ActionInfo />} title={<FormattedMessage {...messagesAboutPage.title} />} />
    </List>
  );
}

export default Navigation;
