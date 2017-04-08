/**
*
* RegistrationView
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'material-ui/Button';
import { Card, CardHeader, CardContent, CardActions } from 'material-ui/Card';
import { LinearProgress } from 'material-ui/Progress';
import { InputLabel } from 'material-ui/Input';
import ErrorTextField from '../ErrorTextField';
import messages from './messages';
import {
  EMAIL_PATTERN,
  USERNAME_PATTERN,
  PASSWORD_PATTERN,
  NAME_PATTERN,
} from './constants';

class RegisterForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      repeatedPassword: '',
      name: '',
      email: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onRepeatPasswordChange(event) {
    this.setState({ repeatedPassword: event.target.value });
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onSubmit(event) {
    this.props.onSubmit(this.state.username, this.state.name, '', this.state.email, this.state.password);
    event.preventDefault();
  }

  validateForm() {
    return {
      username: USERNAME_PATTERN.test(this.state.username),
      password: PASSWORD_PATTERN.test(this.state.password),
      name: NAME_PATTERN.test(this.state.name),
      email: EMAIL_PATTERN.test(this.state.email),
    };
  }

  render() {
    const passwordsMatch = this.state.repeatedPassword === this.state.password;
    const valid = this.validateForm();
    const allValid = valid.username && valid.name && valid.email && valid.password && passwordsMatch;

    return (
      <Card>
        <CardHeader title={<FormattedMessage {...messages.header} />} />
        {this.props.loading && <LinearProgress mode="indeterminate" />}
        <form onSubmit={this.onSubmit}>
          <CardContent>
            <ErrorTextField
              label={<FormattedMessage {...messages.username} />}
              error={!valid.username && this.state.username}
              errorText={<FormattedMessage {...messages.validUsername} />}
              required
              onChange={this.onUsernameChange}
            />
            <ErrorTextField
              label={<FormattedMessage {...messages.password} />}
              required
              error={!valid.password && this.state.password}
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
            <ErrorTextField
              required
              label={<FormattedMessage {...messages.name} />}
              onChange={this.onNameChange}
            />
            <ErrorTextField
              required
              error={!valid.email && this.state.email}
              errorText={<FormattedMessage {...messages.wrongEmail} />}
              label={<FormattedMessage {...messages.email} />}
              onChange={(event) => this.setState({ email: event.target.value })}
            />
            {this.props.error && <InputLabel error><FormattedMessage {...messages.error} /></InputLabel>}
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

RegisterForm.propTypes = {
  onSubmit: React.PropTypes.func,
  error: React.PropTypes.bool,
  loading: React.PropTypes.bool,
};

export default RegisterForm;
