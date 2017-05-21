/**
*
* SubmitModal
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Dialog from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import messages from './messages';

function SubmitModal(props) {
  return (
    <Dialog open={props.open}>
      <Typography type="title"><FormattedMessage {...messages.header} /></Typography>
      <form onSubmit={props.onSubmit}>
        <input type="file" name="file0" onChange={props.onInputChange} />
        <input type="file" name="file1" onChange={props.onInputChange} />
        <input type="file" name="file2" onChange={props.onInputChange} />
        <Button type="submit">Submit</Button>
        <Button onClick={props.onCancel}>Cancel</Button>
      </form>
    </Dialog>
  );
}

SubmitModal.propTypes = {
  open: React.PropTypes.bool,
  onSubmit: React.PropTypes.func.isRequired,
  onInputChange: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
};

export default SubmitModal;
