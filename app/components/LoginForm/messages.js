/*
 * AuthForm Messages
 *
 * This contains all the text for the LoginForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.LoginForm.header',
    defaultMessage: 'Login',
  },
  username: {
    id: 'app.components.LoginForm.username',
    defaultMessage: 'Username',
  },
  password: {
    id: 'app.components.LoginForm.password',
    defaultMessage: 'Password',
  },
  submit: {
    id: 'app.components.LoginForm.submit',
    defaultMessage: 'Log me in',
  },
  invalid: {
    id: 'app.components.LoginForm.invalid',
    defaultMessage: 'Invalid username or password',
  },
});
