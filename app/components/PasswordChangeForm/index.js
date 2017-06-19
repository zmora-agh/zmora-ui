/**
*
* PasswordChangeForm
*
*/

import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import Button from 'material-ui/Button';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
/* import { LinearProgress } from 'material-ui/Progress'; */
import ErrorTextField from '../ErrorTextField';
import messages from './messages';
import { PASSWORD_PATTERN } from '../RegisterForm/constants';

class PasswordChangeForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      password: '',
      repeatedPassword: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onOldPasswordChange = this.onOldPasswordChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
  }

  onOldPasswordChange(event) {
    this.setState({ oldPassword: event.target.value });
  }

  onRepeatPasswordChange(event) {
    this.setState({ repeatedPassword: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onSubmit(event) {
    this.props.onSubmit(this.state.oldPassword, this.state.password);
    event.preventDefault();
  }

  validateForm() {
    return {
      password: PASSWORD_PATTERN.test(this.state.password),
      oldPassword: this.state.oldPassword.length > 0,
    };
  }

  render() {
    const passwordsMatch = this.state.repeatedPassword === this.state.password;
    const valid = this.validateForm();
    const allValid = valid.password && passwordsMatch && valid.oldPassword;

    return (
      <Card>
        <CardHeader title={<FormattedMessage {...messages.header} />} />
        <form onSubmit={this.onSubmit}>
          <CardContent>
            <ErrorTextField
              label={<FormattedMessage {...messages.oldPassword} />}
              error={!valid.oldPassword}
              errorText={<FormattedMessage {...messages.validOldPassword} />}
              required
              type="password"
              onChange={this.onOldPasswordChange}
            />
            <ErrorTextField
              label={<FormattedMessage {...messages.newPassword} />}
              required
              error={!valid.password && this.state.password.length > 0}
              errorText={<FormattedMessage {...messages.validPassword} />}
              type="password"
              onChange={this.onPasswordChange}
            />
            <ErrorTextField
              label={<FormattedMessage {...messages.repeatPassword} />}
              required
              type="password"
              error={!passwordsMatch}
              errorText={<FormattedMessage {...messages.passwordsNotMatch} />}
              onChange={this.onRepeatPasswordChange}
            />
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              primary
              raised
              disabled={!allValid}
              style={{ width: '100%' }}
            >
              <FormattedMessage {...messages.submit} />
            </Button>
          </CardActions>
        </form>
      </Card>
    );
  }
}

PasswordChangeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PasswordChangeForm;
