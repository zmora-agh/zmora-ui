/**
*
* ErrorTextField
*
*/

import React from 'react';
import TextField from 'material-ui/TextField';
import customPropTypes from 'material-ui/utils/customPropTypes';
import { createStyleSheet } from 'jss-theme-reactor';

const styleSheet = createStyleSheet('zmoraErrorTextField', () => ({
  errorText: {
    position: 'relative',
    bottom: 2,
    fontSize: 12,
    lineHeight: '12px',
    color: 'red',
    transition: '0.2',
  },
}));

function ErrorTextField(props, context) {
  const classes = context.styleManager.render(styleSheet);
  const errorText = (
    <div className={classes.errorText}>
      {props.errorText}
    </div>
  );
  return (
    <div>
      <TextField
        required={props.required}
        error={props.error}
        type={props.type}
        label={props.label}
        onChange={props.onChange}
      />
      {props.error ? errorText : null}
    </div>
  );
}

ErrorTextField.propTypes = {
  errorText: React.PropTypes.node,
  error: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  label: React.PropTypes.node,
  type: React.PropTypes.string,
  required: React.PropTypes.bool,
};

ErrorTextField.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

export default ErrorTextField;
