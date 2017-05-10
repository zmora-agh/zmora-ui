/**
 *
 * QuestionCard
 *
 */

import { createStyleSheet } from 'jss-theme-reactor';
import Avatar from 'material-ui/Avatar';
import { Card, CardContent, CardHeader } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import { List, ListItem, ListItemSecondaryAction } from 'material-ui/List';
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
    top: '35%',
  },
  list: {
    marginBottom: 40,
  },
});


function QuestionCard(props, context) {
  const classes = context.styleManager.render(styleSheet);
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
            <ListItem key={a.answer} className={classes.lItem} disableGutters >
              <Avatar className={classes.avatar}>A</Avatar>
              <div>
                <div>
                  <Typography type="body2" >{a.author.name}</Typography>
                </div>
                <Markdown text={a.answer} />
              </div>
              <ListItemSecondaryAction className={classes.date} >
                <Typography type="body1" secondary >{moment(a.answered).fromNow()}</Typography>
              </ListItemSecondaryAction>
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
