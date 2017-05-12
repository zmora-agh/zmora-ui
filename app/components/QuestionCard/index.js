/**
 *
 * QuestionCard
 *
 */

import { createStyleSheet } from 'jss-theme-reactor';
import Avatar from 'material-ui/Avatar';
import Card, { CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import List, { ListItem } from 'material-ui/List';
import { grey } from 'material-ui/styles/colors';
import Typography from 'material-ui/Typography';
import customPropTypes from 'material-ui/utils/customPropTypes';
import moment from 'moment';
import React, { PropTypes } from 'react';
import Markdown from '../Markdown';

const styleSheet = createStyleSheet('SimpleCard', {
  avatar: {
    marginRight: 16,
    flexShrink: 0,
  },
  avatarH: {
    extend: 'avatar',
    marginTop: 8,
    transform: 'scale(1.5)',
  },
  lItem: {
    alignItems: 'flex-start',
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    backgroundColor: grey[50],

  },
  lItemH: {
    extend: 'lItem',
    backgroundColor: grey[200],
  },
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
});

const image = require('./korri.jpg');
const localeSpec = {
  relativeTime: {
    future: 'in %s',
    past: '%s',
    s: 's',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh',
    d: '1d',
    dd: '%dd',
    M: '1mon',
    MM: '%dmon',
    y: '1y',
    yy: '%dy',
  },
};

function QuestionCard(props, context) {
  const classes = context.styleManager.render(styleSheet);
  moment.updateLocale('en', localeSpec);
  return (
    <Card style={{ margin: 24 }}>
      <CardContent className={classes.content} >
        <List disablePadding >

          {row(classes.lItemH, classes.avatarH, props.question.author.name,
            props.question.asked, props.question.question)}


          {props.question.answers.map((a) =>
            <div key={a.answer} >
              <Divider />
              {row(classes.lItem, classes.avatar, a.author.name, a.answered, a.answer)}
            </div>,
          )}
        </List>
      </CardContent>
    </Card>);
}

function row(itemStyle, avatarStyle, author, date, content) {
  return (
    <ListItem key={content} disableGutters className={itemStyle}>

      <Avatar src={image} className={avatarStyle} />
      <div style={{ flexGrow: 1 }}>
        <div>
          <Typography style={{ display: 'inline-block' }} type="body2">{author}</Typography>
          <Typography style={{ float: 'right', display: 'inline-block' }} type="body1" secondary>
            {moment(date).fromNow()}
          </Typography>
        </div>
        <Markdown text={content} />
      </div>
    </ListItem>

  );
}
export default QuestionCard;
QuestionCard.propTypes = {
  question: PropTypes.object,
};

QuestionCard.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

