/**
 *
 * ErrorTextField
 *
 */

import React from 'react';
import TextField from 'material-ui/TextField';
import { withStyles, createStyleSheet } from 'material-ui/styles';
const styleSheet = createStyleSheet('zmoraErrorTextField', () => ({
  errorText: {
    position: 'relative',
    marginTop: 8,
    bottom: 2,
    fontSize: 12,
    lineHeight: '12px',
    color: 'red',
    transition: '0.2',
  },
}));

function ErrorTextField(props) {
  const classes = props.classes;
  const { errorText, ...others } = props;
  const error = (
    <div className={classes.errorText}>
      {errorText}
    </div>
  );
  return (
    <div>
      <TextField {...others} />
      {props.error ? error : null}
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
  classes: React.PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ErrorTextField);
