/**
 *
 * QuestionCard
 *
 */

import { createStyleSheet } from 'jss-theme-reactor';
import Avatar from 'material-ui/Avatar';
import { Card, CardContent, CardHeader } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
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
});


function QuestionCard(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (

    <Card >
      <CardHeader
        avatar={<Avatar className={classes.avatar}>R</Avatar>}
        title={props.question.author.name}
        subheader={moment(props.question.asked).fromNow()}
      />
      <CardContent>
        <Markdown text={props.question.question} />
        <Divider />
        <List>
          {props.question.answers.map((a) =>
            <div>
              <ListItem key={a.answer} className={classes.lItem} >
                <Avatar className={classes.avatar}>A</Avatar>
                <div>
                  <div>
                    <Typography type="body2" >{a.author.name}</Typography>
                    <Typography type="body1" secondary >{moment(a.answered).fromNow()}</Typography>
                  </div>
                  <Markdown text={a.answer} />
                </div>

              </ListItem>
            </div>
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

