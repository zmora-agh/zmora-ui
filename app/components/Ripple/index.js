import React from 'react';

import classNames from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';


export const styleSheet = createStyleSheet('zmoraRipple', (theme) => ({
  ripple: {
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundImage: `radial-gradient(circle, ${theme.palette.background.default} 3%, transparent 3.01%)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    transition: 'transform .5s, opacity 0.5s',
    zIndex: -1,
  },
  rippleOn: {
    transform: 'scale(40,40)',
    opacity: 1,
  },
  rippleOff: {
    transform: 'scale(0,0)',
    opacity: 0,
  },
}));

const Ripple = (props, context) => {
  const classes = context.styleManager.render(styleSheet);

  const rippleClassName = classNames(classes.ripple, {
    [classes.rippleOff]: !props.on,
    [classes.rippleOn]: props.on,
  }, classes.ripple);
  return (
    <span className={rippleClassName} />
  );
};

Ripple.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

Ripple.propTypes = {
  on: React.PropTypes.bool,
};

export default Ripple;
