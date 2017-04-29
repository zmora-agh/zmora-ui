/**
*
* ContestJoinModal
*
*/

import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, DialogContentText } from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import { Button } from 'material-ui/Button';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ErrorTextField from '../ErrorTextField';
import { DIALOG_TYPE } from '../../containers/ContestsPage/constants';

class ContestJoinModal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onJoin = this.onJoin.bind(this);
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  onJoin() {
    this.props.onJoin(this.props.dialog.contestId, this.state.password);
  }

  render() {
    const backDropClick = this.props.dialog.loading ? null : this.props.onClose;
    return (
      <Dialog open={this.props.dialog.open} onBackdropClick={backDropClick} transition={Slide}>
        <DialogTitle>
          <FormattedMessage {...messages.enterPassword} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormattedMessage
              {...messages.contestJoinMessage}
              values={{ contestName: this.props.dialog.contestName }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <ErrorTextField
            onChange={this.onPasswordChange}
            error={this.props.dialog.error}
            errorText={<FormattedMessage {...messages.invalidPassword} />}
            required
            label={<FormattedMessage {...messages.password} />}
          />
        </DialogContent>
        <DialogActions>
          <Button primary raised disabled={this.props.dialog.loading} onClick={this.onJoin}>
            <FormattedMessage {...messages.join} />
          </Button>
          <Button primary raised disabled={this.props.dialog.loading} onClick={this.props.onClose}>
            <FormattedMessage {...messages.cancel} />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ContestJoinModal.propTypes = {
  dialog: DIALOG_TYPE,
  onClose: React.PropTypes.func.isRequired,
  onJoin: React.PropTypes.func.isRequired,
};

export default ContestJoinModal;
