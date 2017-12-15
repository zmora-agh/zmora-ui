/**
 *
 * PasswordChangeForm
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from 'material-ui/Button';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import { InputLabel } from 'material-ui/Input';

import { LinearProgress } from 'material-ui/Progress';
import ErrorTextField from '../ErrorTextField';
import messages from './messages';
import { PASSWORD_PATTERN } from '../RegisterForm/constants';
import { componentRequireAuth } from '../../utils/auth';
import { passwordChangePropType } from './constants';


@componentRequireAuth
class PasswordChangeForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      password: '',
      repeatedPassword: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.wasSubmitted = false;
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
    this.wasSubmitted = true;
    event.preventDefault();
  }

  validateForm() {
    return {
      password: PASSWORD_PATTERN.test(this.state.password),
    };
  }


  render() {
    const passwordsMatch = this.state.repeatedPassword === this.state.password;
    const valid = this.validateForm();
    const allValid = valid.password && passwordsMatch;

    return (
      <Card>
        <CardHeader title={<FormattedMessage {...messages.header} />} />
        {this.props.loading && <LinearProgress mode="indeterminate" />}
        <form onSubmit={this.onSubmit}>
          <CardContent >
            <ErrorTextField
              label={<FormattedMessage {...messages.oldPassword} />}
              required
              fullWidth
              errorText={<FormattedMessage {...messages.validOldPassword} />}
              type="password"
              onChange={this.onOldPasswordChange}
            />
            <ErrorTextField
              label={<FormattedMessage {...messages.newPassword} />}
              required
              fullWidth
              error={!valid.password && this.state.password.length > 0}
              errorText={<FormattedMessage {...messages.validPassword} />}
              type="password"
              onChange={this.onPasswordChange}
            />
            <ErrorTextField
              label={<FormattedMessage {...messages.repeatPassword} />}
              required
              fullWidth
              type="password"
              error={!passwordsMatch}
              errorText={<FormattedMessage {...messages.passwordsNotMatch} />}
              onChange={this.onRepeatPasswordChange}
            />
            {this.props.error && <InputLabel error><FormattedMessage {...messages.passwordNotChanged} /></InputLabel>}
            {!this.props.error && this.wasSubmitted && !this.props.loading && <InputLabel test>
              <FormattedMessage {...messages.passwordChanged} />
            </InputLabel>}
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              color="primary"
              raised
              disabled={!allValid || this.props.loading}
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

PasswordChangeForm.propTypes = passwordChangePropType;


export default PasswordChangeForm;
