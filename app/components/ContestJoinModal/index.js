/**
*
* ContestJoinModal
*
*/

import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, DialogContentText } from 'material-ui/Dialog';
import { TextField } from 'material-ui/TextField';
import Slide from 'material-ui/transitions/Slide';
import { Button } from 'material-ui/Button';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ContestJoinModal(props) {
  return (
    <Dialog open={props.open} onBackdropClick={props.onClose} transition={Slide}>
      <DialogTitle>
        <FormattedMessage {...messages.enterPassword} />
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <FormattedMessage {...messages.contestJoinMessage} values={{ contestName: props.contest.name }} />
        </DialogContentText>
      </DialogContent>
      <DialogContent>
        <TextField
          required
          label={<FormattedMessage {...messages.password} />}
        />
      </DialogContent>
      <DialogActions>
        <Button primary raised><FormattedMessage {...messages.join} /></Button>
        <Button primary raised onClick={props.onClose}><FormattedMessage {...messages.cancel} /></Button>
      </DialogActions>
    </Dialog>
  );
}

ContestJoinModal.propTypes = {
  open: React.PropTypes.bool,
  onClose: React.PropTypes.func,
  contest: React.PropTypes.object,
};

export default ContestJoinModal;
