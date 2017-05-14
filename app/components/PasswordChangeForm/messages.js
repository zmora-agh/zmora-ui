/*
 * RegistrationView Messages
 *
 * This contains all the text for the RegistrationView component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.ChangePasswordForm.header',
    defaultMessage: 'Change password',
  },
  oldPassword: {
    id: 'app.components.ChangePasswordForm.oldPassword',
    defaultMessage: 'Old password',
  },
  newPassword: {
    id: 'app.components.ChangePasswordForm.newPassword',
    defaultMessage: 'Password',
  },
  repeatPassword: {
    id: 'app.components.ChangePasswordForm.repeatPassword',
    defaultMessage: 'Repeat password',
  },
  name: {
    id: 'app.components.ChangePasswordForm.name',
    defaultMessage: 'Name',
  },
  email: {
    id: 'app.components.ChangePasswordForm.email',
    defaultMessage: 'Email',
  },
  passwordsNotMatch: {
    id: 'app.components.ChangePasswordForm.components',
    defaultMessage: 'Passwords does not match',
  },
  submit: {
    id: 'app.components.ChangePasswordForm.submit',
    defaultMessage: 'Change password',
  },
  error: {
    id: 'app.components.ChangePasswordForm.error',
    defaultMessage: 'Invalid old password',
  },
  validOldPassword: {
    id: 'app.components.ChangePasswordForm.validOldPassword',
    defaultMessage: 'Old password should not be empty',
  },
  validPassword: {
    id: 'app.components.ChangePasswordForm.passwordValid',
    defaultMessage: 'Password should have at least 8 characters',
  },
});
