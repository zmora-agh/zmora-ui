/**
*
* ContestJoinModal
*
*/

import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Dialog, { DialogContent, DialogTitle, DialogActions, DialogContentText } from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import Button from 'material-ui/Button';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ErrorTextField from '../ErrorTextField';
import { DIALOG_TYPE } from '../../containers/ContestsPage/constants';


const styleSheet = createStyleSheet('zmoraContestJoinDialog', () => ({
  paper: {
    width: '75vw',
  },
}));

@withStyles(styleSheet)
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

  onJoin(event) {
    this.props.onJoin(this.props.dialog.contestId, this.state.password);
    event.preventDefault();
  }

  render() {
    const backDropClick = this.props.dialog.loading ? null : this.props.onClose;
    return (
      <Dialog
        open={this.props.dialog.open}
        onRequestClose={backDropClick}
        transition={Slide}
        classes={this.props.classes}
      >
        <DialogTitle>
          <FormattedMessage {...messages.enterPassword} />
        </DialogTitle>
        <form onSubmit={this.onJoin}>
          <DialogContent>
            <DialogContentText>
              <FormattedMessage
                {...messages.contestJoinMessage}
                values={{ contestName: this.props.dialog.contestName }}
              />
            </DialogContentText>
          </DialogContent>
          <DialogContent >
            <ErrorTextField
              onChange={this.onPasswordChange}
              error={this.props.dialog.error}
              errorText={<FormattedMessage {...messages.invalidPassword} />}
              required
              fullWidth
              label={<FormattedMessage {...messages.password} />}
            />
          </DialogContent>
          <DialogActions>
            <Button disabled={this.props.dialog.loading} onClick={this.props.onClose}>
              <FormattedMessage {...messages.cancel} />
            </Button>
            <Button type="submit" color="primary" disabled={this.props.dialog.loading}>
              <FormattedMessage {...messages.join} />
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}

ContestJoinModal.propTypes = {
  dialog: DIALOG_TYPE,
  onClose: React.PropTypes.func.isRequired,
  onJoin: React.PropTypes.func.isRequired,
  classes: React.PropTypes.object.isRequired,
};

export default ContestJoinModal;
