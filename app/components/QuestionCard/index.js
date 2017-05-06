/**
 *
 * QuestionCard
 *
 */

import React, { PropTypes } from 'react';
import { Card, CardContent } from 'material-ui/Card';
import { Typography } from 'material-ui/Typography';


function QuestionCard(props) {
  const { question, answers } = props;

  return (
    <Card>
      <CardContent>
        <Typography key={question} type="title">{question}</Typography>
        {answers.map((a) => <Typography key={a} >{a}</Typography>)}
      </CardContent>
    </Card>);
}


QuestionCard.defaultProps = {
  question: 'abc',
};

QuestionCard.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { QuestionCard };
