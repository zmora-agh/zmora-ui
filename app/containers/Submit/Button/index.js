import React from 'react';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import FileUpload from '../../../svg-icons/file-upload';

import { submitModalOpen } from '../actions';

function Button(props) {
  return (<IconButton
    style={props.style}
    onClick={() => props.dispatch(submitModalOpen())}
  >
    <FileUpload />
  </IconButton>);
}

Button.propTypes = {
  style: React.PropTypes.object,
  dispatch: React.PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(null, mapDispatchToProps)(Button);
