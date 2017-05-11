/*
 *
 * AuthPage
 *
 */

import React from 'react';

import Grid from 'material-ui/Grid';
import RegisterForm from '../Register';
import Login from '../Login';


function AuthPage() {
  return (
    <Grid container>
      <Grid item xs={12} md={6}><Login /></Grid>
      <Grid item xs={12} md={6}><RegisterForm /></Grid>
    </Grid>
  );
}

export default AuthPage;
