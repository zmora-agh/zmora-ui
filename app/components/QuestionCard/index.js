/**
 *
 * QuestionCard
 *
 */

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import React, { PropTypes } from 'react';
import QuestionRow from './QuestionRow';

const styleSheet = createStyleSheet('QuestionCard', {
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
});

function QuestionCard(props) {
  const classes = props.classes;
  return (
    <Card style={{ margin: 24 }}>
      <CardContent className={classes.content} >
        <List disablePadding >

          <QuestionRow
            author={props.question.author.name} date={props.question.asked}
            content={props.question.question} headerRow
          />

          {props.question.answers.map((a) =>
            <div key={a.answer} >
              <Divider />
              <QuestionRow author={a.author.name} date={a.answered} content={a.answer} />
            </div>,
          )}
        </List>
      </CardContent>
    </Card>);
}

QuestionCard.propTypes = {
  question: PropTypes.object,
  classes: React.PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(QuestionCard);
