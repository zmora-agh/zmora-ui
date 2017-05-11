/**
 *
 * QuestionCard
 *
 */

import { createStyleSheet } from 'jss-theme-reactor';
import Avatar from 'material-ui/Avatar';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import List, { ListItem } from 'material-ui/List';
import { blue } from 'material-ui/styles/colors';
import Typography from 'material-ui/Typography';
import customPropTypes from 'material-ui/utils/customPropTypes';
import moment from 'moment';
import React, { PropTypes } from 'react';
import Markdown from '../Markdown';


const styleSheet = createStyleSheet('SimpleCard', {
  avatar: {
    backgroundColor: blue[500],
    marginRight: 16,
  },
  lItem: {
    paddingLeft: 0,
  },
  date: {
    float: 'right',
    display: 'inline-block',
  },
  list: {
    marginBottom: 40,
  },
  inl: {
    display: 'inline-block',
  },
  grow: {
    flexGrow: 1,
  },
});


function QuestionCard(props, context) {
  const classes = context.styleManager.render(styleSheet);
  moment.updateLocale('en', {
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
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years',
    },
  });
  const abc = ` aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaa
    aaaaaa  aaaaaaaa aaaaaaaa aaaaaaaaaaa aaaaaaa  `;
  return (
    <Card className={classes.list}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>R</Avatar>}
        title={props.question.author.name}
        subheader={moment(props.question.asked).fromNow()}
      />
      <CardContent>
        <Markdown text={props.question.question} />
        <Divider />
        <List >
          {props.question.answers.map((a) =>
            <ListItem key={a.answer} >
              <Avatar className={classes.avatar}>A</Avatar>
              <div className={classes.grow}>
                <div>
                  <Typography className={classes.inl} type="body2" >{a.author.name}</Typography>
                  <Typography className={classes.date} type="body1" secondary >
                    {moment(a.answered).fromNow()}
                  </Typography>

                </div>
                <Markdown text={abc} />
              </div>
            </ListItem>
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
