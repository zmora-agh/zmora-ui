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
import React, { PropTypes, PureComponent } from 'react';
import Markdown from '../Markdown';

const styleSheet = createStyleSheet('SimpleCard', {
  avatar: {
    backgroundColor: blue[500],
    marginRight: 16,
    marginLeft: 0,

  },
  lItem: {
    paddingLeft: 0,
  },
  ansName: {
    marginBottom: 16,
    paddingRight: 16,
  },

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

      <Card >
        <CardHeader
          avatar={<Avatar className={classes.avatar}>R</Avatar>}
          title={this.props.question.author.name}
          subheader={moment(this.props.question.asked).fromNow()}
        />
        <CardContent>
          <Markdown text={this.props.question.question} />
          <Divider />
          <List>
            {this.props.question.answers.map((a) =>
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
}

