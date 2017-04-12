/**
*
* SubmitModal
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Dialog from 'material-ui/Dialog';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';

import messages from './messages';

function SubmitModal(props) {
  return (
    <Dialog open={props.open}>
      <Text type="title"><FormattedMessage {...messages.header} /></Text>
      <form onSubmit={props.onSubmit}>
        <input type="file" name="file[0]" onChange={props.onInputChange} />
        <input type="file" name="file[1]" onChange={props.onInputChange} />
        <input type="file" name="file[2]" onChange={props.onInputChange} />
        <input type="file" name="file[3]" onChange={props.onInputChange} />
        <input type="file" name="file[4]" onChange={props.onInputChange} />
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
