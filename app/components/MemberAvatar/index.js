/**
*
* MemberAvatar
*
*/

import React from 'react';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';import Card from 'material-ui/Card';

const styleSheet = createStyleSheet('zmoraMemberAvatar', () => ({
  root: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 42%',
    paddingBottom: '30px',
    paddingTop: '40px',
  },
}));

function MemberAvatar(props) {
  const classes = props.classes;
  const variantStyle = {
    backgroundImage: `url(${props.bgUrl})`,
    backgroundColor: props.bgColor,
  };

  return (
    <Card raised>
      <div className={classes.root} style={variantStyle}>
        <Avatar
          alt="memberPhoto"
          src={props.avatarUrl}
          style={{ margin: '0 auto', width: 120, height: 120, border: 5, borderStyle: 'solid', borderColor: 'white' }}
        />
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
          <Typography type="display2" style={{ color: 'white', fontSize: 34 }}>{props.name}</Typography>
          <Typography type="display1" style={{ color: 'white', fontSize: 22 }}>{props.description}</Typography>
        </div>
      </div>
    </Card>
  );
}

MemberAvatar.propTypes = {
  bgColor: React.PropTypes.string.isRequired,
  avatarUrl: React.PropTypes.string.isRequired,
  bgUrl: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  classes: React.PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(MemberAvatar);
