/**
*
* ServerTime
*
*/

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import TimeIcon from 'material-ui-icons/AccessTime';

import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';

import { makeSelectTime } from '../App/selectors';


const styleSheet = createStyleSheet('zmoraServerTime', () => ({
  icon: {
    color: 'inherit',
  },
}));

@withStyles(styleSheet)
class ServerTime extends React.Component {
  static propTypes = {
    style: React.PropTypes.object,
    offset: React.PropTypes.number.isRequired,
    classes: React.PropTypes.object.isRequired,
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
    const classes = this.props.classes;

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
            <Typography color="inherit" style={{ marginRight: 8 }} type="body2">
              {time.format('HH:mm:ss')}
            </Typography>
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
