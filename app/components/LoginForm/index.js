/**
*
* LoginForm
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { InputLabel } from 'material-ui/Input';
import { LinearProgress } from 'material-ui/Progress';

import { loginPropType } from './constants';
import messages from './messages';

class LoginForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onSubmit(event) {
    this.props.onSubmit(this.state.username, this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <Card>
        <CardHeader title={<FormattedMessage {...messages.header} />} />
        {this.props.loading && <LinearProgress mode="indeterminate" />}
        <form onSubmit={this.onSubmit}>
          <CardContent>
            <TextField
              label={<FormattedMessage {...messages.username} />}
              required
              value={this.state.username}
              error={this.props.error}
              disabled={this.props.loading}
              onChange={this.onUsernameChange}
            />
            <TextField
              type="password"
              label={<FormattedMessage {...messages.password} />}
              required
              value={this.state.password}
              error={this.props.error}
              disabled={this.props.loading}
              onChange={this.onPasswordChange}
            />
            {this.props.error && <InputLabel error><FormattedMessage {...messages.invalid} /></InputLabel>}
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              primary
              raised
              disabled={!this.state.username || !this.state.password || this.props.loading}
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

LoginForm.propTypes = loginPropType;

export default LoginForm;
