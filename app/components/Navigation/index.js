/**
*
* Navigation
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';

import { List } from 'material-ui/List';

// Icons
import Home from 'react-material-icons/icons/action/home';
import Announcement from 'react-material-icons/icons/action/announcement';
import Assignment from 'react-material-icons/icons/action/assignment';
import Star from 'react-material-icons/icons/toggle/star';

import NavListItem from '../NavListItem';
import messagesHomePage from '../../containers/HomePage/messages';
import messagesContestsPage from '../../containers/ContestsPage/messages';
import messagesRankingPage from '../../containers/RankingPage/messages';
import messagesNewsPage from '../../containers/NewsPage/messages';

function Navigation(props) {
  return (
    <List style={props.style}>
      <NavListItem to="/" icon={<Home />} title={<FormattedMessage {...messagesHomePage.title} />} />
      <NavListItem to="/contests" icon={<Assignment />} title={<FormattedMessage {...messagesContestsPage.title} />} />
      <NavListItem to="/ranking" icon={<Star />} title={<FormattedMessage {...messagesRankingPage.title} />} />
      <NavListItem to="/news" icon={<Announcement />} title={<FormattedMessage {...messagesNewsPage.title} />} />
    </List>
  );
}

Navigation.propTypes = {
  style: React.PropTypes.object,
};

export default Navigation;
