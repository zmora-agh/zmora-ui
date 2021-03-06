import React from 'react';

import classNames from 'classnames';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { easing } from 'material-ui/styles/transitions';


export const styleSheet = createStyleSheet('zmoraRipple', (theme) => ({
  ripple: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    opacity: 0,
    backgroundColor: theme.palette.background.default,
    zIndex: -1,
  },
  '@keyframes zmora-ripple-enter': {
    '0%': {
      transform: 'scaleX(0)',
      opacity: 0,
    },
    '50%': {
      opacity: 1,
    },
    '100%': {
      transform: 'scaleX(2)',
      opacity: 1,
    },
  },
  '@keyframes zmora-ripple-exit': {
    '0%': {
      opacity: 1,
      transform: 'scaleX(2)',
    },
    '100%': {
      opacity: 0,
      transform: 'scaleX(2)',
    },
  },
  rippleOn: {
    opacity: 1,
    transform: 'scaleX(2)',
    animation: `zmora-ripple-enter 1s ${easing.easeInOut}`,
  },
  rippleOff: {
    opacity: 0,
    transform: 'scaleX(0)',
    animation: `zmora-ripple-exit 1s ${easing.easeInOut}`,
  },
}));

const Ripple = (props) => {
  const classes = props.classes;

  const rippleClassName = classNames(classes.ripple, {
    [classes.rippleOff]: !props.on,
    [classes.rippleOn]: props.on,
  }, classes.ripple);
  return (
    <div style={{ left: props.centerX }} className={rippleClassName} />
  );
};

Ripple.propTypes = {
  on: React.PropTypes.bool,
  centerX: React.PropTypes.number.isRequired,
  classes: React.PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Ripple);
