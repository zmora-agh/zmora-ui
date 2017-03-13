/**
*
* Navigation
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';

import {
  List,
} from 'material-ui/List';

// Icons
import Home from '../../svg-icons/home';
import Announcement from '../../svg-icons/announcement';
import Assignment from '../../svg-icons/assignment';
import Star from '../../svg-icons/star';

import NavListItem from '../NavListItem';
import messagesHomePage from '../../containers/HomePage/messages';
import messagesContestsPage from '../../containers/ContestsPage/messages';
import messagesRankingPage from '../../containers/RankingPage/messages';
import messagesNewsPage from '../../containers/NewsPage/messages';

function Navigation(props) {
  return (
    <List {...props} >
      <NavListItem to="/" icon={<Home />} title={<FormattedMessage {...messagesHomePage.title} />} />
      <NavListItem to="/contests" icon={<Assignment />} title={<FormattedMessage {...messagesContestsPage.title} />} />
      <NavListItem to="/ranking" icon={<Star />} title={<FormattedMessage {...messagesRankingPage.title} />} />
      <NavListItem to="/news" icon={<Announcement />} title={<FormattedMessage {...messagesNewsPage.title} />} />
    </List>
  );
}

export default Navigation;
