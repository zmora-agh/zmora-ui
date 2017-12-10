/**
*
* ServerTime
*
*/

import TimeIcon from 'material-ui-icons/AccessTime';
import Chip from 'material-ui/Chip';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';

import { makeSelectTime } from '../App/selectors';


const styleSheet = createStyleSheet('zmoraServerTime', () => ({
  icon: {
    color: 'inherit',
  },
  font: {
    color: 'inherit',
    transition: 'width 1s',
    overflow: 'hidden',
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
    const chipStyleExpanded = {
      color: 'inherit',
      background: 'rgba(255, 255, 255, 0.12)',
      width: 130,
      transition: 'width 1s',
    };

    const chipStyle = {
      color: 'inherit',
      background: 'inherit',
      width: 45,
      transition: 'width 1s',
    };

    const time = moment();
    time.add(this.props.offset, 'seconds');

    return (
      <Chip
        onClick={this.toggleTime}
        style={Object.assign({}, this.state.showTime ? chipStyleExpanded : chipStyle, this.props.style)}
        avatar={<TimeIcon style={{ width: 28 }} />}
        label={
          <Typography className={classes.font} style={{ width: this.state.showTime ? 60 : 0 }} type="body2">
            {time.format('HH:mm:ss')}
          </Typography>
        }
      />
    );
  }
}

export default connect(makeSelectTime)(ServerTime);
