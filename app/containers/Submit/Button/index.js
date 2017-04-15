import React from 'react';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import FileUpload from '../../../svg-icons/file-upload';

import { submitModalOpen } from '../actions';

function Button(props) {
  return (<IconButton
    style={props.style}
    onClick={(e) => { props.dispatch(submitModalOpen(props.contestId, props.problemId)); e.stopPropagation(); }}
  >
    <FileUpload />
  </IconButton>);
}

Button.propTypes = {
  contestId: React.PropTypes.number,
  problemId: React.PropTypes.number,
  style: React.PropTypes.object,
  dispatch: React.PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(null, mapDispatchToProps)(Button);
