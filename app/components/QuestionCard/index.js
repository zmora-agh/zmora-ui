/**
 *
 * QuestionCard
 *
 */

import { createStyleSheet } from 'jss-theme-reactor';

import Card, { CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import customPropTypes from 'material-ui/utils/customPropTypes';
import moment from 'moment';
import React, { PropTypes } from 'react';
import QuestionRow from '../QuestionRow';

const styleSheet = createStyleSheet('QuestionCard', {
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
});

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

export default QuestionCard;
QuestionCard.propTypes = {
  question: PropTypes.object,
};

QuestionCard.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

