/**
 *
 * QuestionCard
 *
 */

import { Card, CardContent, CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import React, { PropTypes, PureComponent } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import { blue } from 'material-ui/styles/colors';
import customPropTypes from 'material-ui/utils/customPropTypes';
import moment from 'moment';
import Markdown from '../Markdown';

const styleSheet = createStyleSheet('SimpleCard', {
  avatar: { backgroundColor: blue[500] },
});


export default class QuestionCard extends PureComponent {
  static propTypes = {
    question: PropTypes.object,
  };

  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  };


  render() {
    const classes = this.context.styleManager.render(styleSheet);
    return (

      <Card>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>R</Avatar>}
          title={this.props.question.author.name}
          subheader={moment(this.props.question.asked).fromNow()}
        />
        <CardContent>
          <Markdown text={this.props.question.question} />
          {this.props.question.answers.map((a) =>
            <Card key={a.answer}>

              <CardHeader
                avatar={<Avatar className={classes.avatar}>A</Avatar>}
                title={a.author.name}
                subheader={moment(a.answered).fromNow()}
              />

              <CardContent>
                <Markdown text={a.answer} />
              </CardContent>

            </Card>,
          )}
        </CardContent>
      </Card>);
  }
}

