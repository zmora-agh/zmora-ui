/*
 *
 * AuthPage
 *
 */

import React from 'react';

import Layout from 'material-ui/Layout';
import RegisterForm from '../Register';
import Login from '../Login';


function AuthPage() {
  return (
    <Layout container>
      <Layout item xs={12} md={6}><Login /></Layout>
      <Layout item xs={12} md={6}><RegisterForm /></Layout>
    </Layout>
  );
}

export default AuthPage;
