/*
 * RegistrationView Messages
 *
 * This contains all the text for the RegistrationView component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.RegisterForm.header',
    defaultMessage: 'Register',
  },
  username: {
    id: 'app.components.RegisterForm.username',
    defaultMessage: 'Username',
  },
  password: {
    id: 'app.components.RegisterForm.password',
    defaultMessage: 'Password',
  },
  repeatPassword: {
    id: 'app.components.RegisterForm.repeatPassword',
    defaultMessage: 'Repeat password',
  },
  name: {
    id: 'app.components.RegisterForm.name',
    defaultMessage: 'Name',
  },
  email: {
    id: 'app.components.RegisterForm.email',
    defaultMessage: 'Email',
  },
  passwordsNotMatch: {
    id: 'app.components.RegisterForm.components',
    defaultMessage: 'Passwords does not match',
  },
  submit: {
    id: 'app.components.RegisterForm.submit',
    defaultMessage: 'Register',
  },
  error: {
    id: 'app.components.RegisterForm.error',
    defaultMessage: 'User can\'be registered',
  },
});
