/**
*
* ServerTime
*
*/

import React from 'react';

import customPropTypes from 'material-ui/utils/customPropTypes';

import IconButton from 'material-ui/IconButton';
import Chip from 'material-ui/Chip';
import Text from 'material-ui/Text';

import { createStyleSheet } from 'jss-theme-reactor';

import TimeIcon from '../../svg-icons/access-time';


const styleSheet = createStyleSheet('zmoraServerTime', (theme) => ({
  icon: {
    color: 'inherit',
  },
  chip: {
    color: 'inherit',
    background: theme.palette.primary[300],
  },
}));

class ServerTime extends React.Component {
  static propTypes = {
    style: React.PropTypes.object,
  };

  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  };

  constructor(props) {
    super(props);
    this.state = { showTime: false };
    this.toggleTime = this.toggleTime.bind(this);
  }

  toggleTime() {
    this.setState({ showTime: !this.state.showTime });
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    if (this.state.showTime) {
      return (
        <Chip
          onClick={this.toggleTime}
          className={classes.chip}
          style={this.props.style}
          avatar={<TimeIcon />}
          label={
            <Text colorInherit style={{ marginRight: 8 }} type="body2">
              12:32:20
            </Text>
          }
        />
      );
    }

    return (
      <IconButton style={this.props.style} className={classes.icon} onClick={this.toggleTime}>
        <TimeIcon />
      </IconButton>
    );
  }
}

export default ServerTime;
