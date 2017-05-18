/*
 *
 * AuthPage
 *
 */

import React from 'react';

import Grid from 'material-ui/Grid';
import RegisterForm from '../Register';
import Login from '../Login';


function AuthPage(props) {
  return (
    <Grid container>
      <Grid item xs={12} md={6}><Login from={props.location.query.from} /></Grid>
      <Grid item xs={12} md={6}><RegisterForm /></Grid>
    </Grid>
  );
}

AuthPage.propTypes = {
  location: React.PropTypes.shape({
    query: React.PropTypes.shape({
      from: React.PropTypes.string,
    }),
  }),
};

export default AuthPage;
