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
import TimeIcon from '../../svg-icons/access-time';

class ServerTime extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
    const theme = this.context.styleManager.theme;

    if (this.state.showTime) {
      return (
        <Chip
          onClick={this.toggleTime}
          style={{ color: 'inherit', background: theme.palette.primary[300] }}
          avatar={<TimeIcon />}
          label={
            <Text style={{ color: 'inherit', marginRight: 8 }} type="body2">
              12:32:20
            </Text>
          }
        />
      );
    }
    return (
      <IconButton style={{ color: 'inherit' }} onClick={this.toggleTime}>
        <TimeIcon />
      </IconButton>
    );
  }
}

ServerTime.propTypes = {

};

export default ServerTime;
