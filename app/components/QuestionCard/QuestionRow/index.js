/**
 *
 * QuestionRow
 *
 */

import { withStyles, createStyleSheet } from 'material-ui/styles';import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import grey from 'material-ui/colors/grey';
import Typography from 'material-ui/Typography';
import moment from 'moment';
import React, { PropTypes } from 'react';

import Markdown from '../../Markdown';

const styleSheet = createStyleSheet('QuestionRow', {
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
});

const defaultImg = require('./korri.jpg');

function QuestionRow(props) {
  const classes = props.classes;
  const itemStyle = props.headerRow ? classes.lItemH : classes.lItem;
  const avatarStyle = props.headerRow ? classes.avatarH : classes.avatar;
  return (
    <ListItem key={props.content} disableGutters className={itemStyle}>

      <Avatar src={props.avatarImg} className={avatarStyle} />
      <div style={{ flexGrow: 1 }}>
        <div>
          <Typography style={{ display: 'inline-block' }} type="body2">{props.author}</Typography>
          <Typography style={{ float: 'right', display: 'inline-block' }} type="body1" secondary>
            {moment(props.date).fromNow()}
          </Typography>
        </div>
        <Markdown text={props.content} />
      </div>
    </ListItem>

  );
}


QuestionRow.propTypes = {
  headerRow: PropTypes.bool,
  avatarImg: PropTypes.any,
  author: PropTypes.string.isRequired,
  date: PropTypes.any.isRequired,
  content: PropTypes.string.isRequired,
  classes: React.PropTypes.object.isRequired,
};

QuestionRow.defaultProps = {
  avatarImg: defaultImg,
  headerRow: false,
};

export default withStyles(styleSheet)(QuestionRow);
