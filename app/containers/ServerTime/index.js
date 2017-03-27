/**
*
* ServerTime
*
*/

import { createStyleSheet } from 'jss-theme-reactor';

import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import Text from 'material-ui/Text';
import customPropTypes from 'material-ui/utils/customPropTypes';

import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';

import { makeSelectTime } from '../App/selectors';
import TimeIcon from '../../svg-icons/access-time';


const styleSheet = createStyleSheet('zmoraServerTime', () => ({
  icon: {
    color: 'inherit',
  },
}));

class ServerTime extends React.Component {
  static propTypes = {
    style: React.PropTypes.object,
    offset: React.PropTypes.number.isRequired,
  };

  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  };

  constructor(props) {
    super(props);
    this.state = { showTime: false };
    this.toggleTime = this.toggleTime.bind(this);
    this.timer = null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.showTime !== prevState.showTime) {
      if (this.timer !== null) {
        clearInterval(this.timer);
      }

      if (this.state.showTime) {
        this.timer = setInterval(() => this.forceUpdate(), 1000);
      }
    }
  }

  toggleTime() {
    this.setState({ showTime: !this.state.showTime });
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    const chipStyle = {
      color: 'inherit',
      background: 'rgba(255, 255, 255, 0.3)',
      transition: 'inherit',
    };

    if (this.state.showTime) {
      const time = moment();
      time.add(this.props.offset, 'seconds');

      return (
        <Chip
          onClick={this.toggleTime}
          style={Object.assign({}, chipStyle, this.props.style)}
          avatar={<TimeIcon />}
          label={
            <Text colorInherit style={{ marginRight: 8 }} type="body2">
              {time.format('HH:mm:ss')}
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

export default connect(makeSelectTime)(ServerTime);
