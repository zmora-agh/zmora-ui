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
  date: {
    float: 'right',
    display: 'inline-block',
  },
  card: {
    margin: 24,
  },
  inl: {
    display: 'inline-block',
  },
  grow: {
    flexGrow: 1,
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
    <Card className={classes.card}>
      <CardContent className={classes.content} >
        <List disablePadding >

          <ListItem disableGutters className={classes.lItemH}>

            <Avatar src={image} className={classes.avatarH} />
            <div className={classes.grow}>
              <div>
                <Typography className={classes.inl} type="body2">{props.question.author.name}</Typography>
                <Typography className={classes.date} type="body1" secondary>
                  {moment(props.question.asked).fromNow()}
                </Typography>
              </div>
              <Markdown text={props.question.question} />
            </div>
          </ListItem>


          {props.question.answers.map((a) =>
            <div>
              <Divider />
              <ListItem disableGutters key={a.answer} className={classes.lItem}>
                <Avatar src={image} className={classes.avatar} />
                <div className={classes.grow}>
                  <div>
                    <Typography className={classes.inl} type="body2">{a.author.name}</Typography>
                    <Typography className={classes.date} type="body1" secondary>
                      {moment(a.answered).fromNow()}
                    </Typography>
                  </div>
                  <Markdown text={a.answer} />
                </div>
              </ListItem>
            </div>,
          )}
        </List>
      </CardContent>
    </Card>);
}

export default QuestionCard;
QuestionCard.propTypes = {
  question: PropTypes.object,
};

QuestionCard.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

