/**
*
* Navigation
*
*/

import React from 'react';
import { Link } from 'react-router';
// import styled from 'styled-components';
import * as Colors from 'material-ui/styles/colors';

import { FormattedMessage } from 'react-intl';

import { List, ListItem } from 'material-ui/List';

import messagesHomePage from '../../containers/HomePage/messages';
import messagesContests from '../../containers/ContestsPage/messages';
import messagesRanking from '../../containers/RankingPage/messages';
import messagesNews from '../../containers/NewsPage/messages';

function Navigation(props) {
  const linkStyle = { textDecoration: 'none' };
  const activeLinkStyle = {
    display: 'block',
    backgroundColor: Colors.grey200,
  };

  return (
    <List style={props.style}>
      <Link to="/" style={linkStyle} activeStyle={activeLinkStyle}><ListItem insetChildren primaryText={<FormattedMessage {...messagesHomePage.title} />} /></Link>
      <Link to="/contests" style={linkStyle} activeStyle={activeLinkStyle}><ListItem insetChildren primaryText={<FormattedMessage {...messagesContests.title} />} /></Link>
      <Link to="/ranking" style={linkStyle} activeStyle={activeLinkStyle}><ListItem insetChildren primaryText={<FormattedMessage {...messagesRanking.title} />} /></Link>
      <Link to="/news" style={linkStyle} activeStyle={activeLinkStyle}><ListItem insetChildren primaryText={<FormattedMessage {...messagesNews.title} />} /></Link>
    </List>
  );
}

Navigation.propTypes = {
  style: React.PropTypes.object,
};

export default Navigation;
