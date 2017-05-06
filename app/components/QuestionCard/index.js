/**
 *
 * QuestionCard
 *
 */

import React, { PropTypes } from 'react';
import { Card, CardContent } from 'material-ui/Card';
import { Typography } from 'material-ui/Typography';


function QuestionCard(props) {
  const { question } = props;

  return (
    <Card>
      <CardContent>
        <Typography type="title">asdf</Typography>
        <Typography type="title">{question}</Typography>
      </CardContent>
    </Card>);
}


QuestionCard.defaultProps = {
  question: 'abc',
};

QuestionCard.propTypes = {
  question: PropTypes.string.isRequired,
};

export { QuestionCard };
