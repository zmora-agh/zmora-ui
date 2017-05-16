/*
 *
 * AuthPage
 *
 */

import React from 'react';

import Layout from 'material-ui/Layout';
import RegisterForm from '../Register';
import Login from '../Login';


function AuthPage(props) {
  return (
    <Layout container>
      <Layout item xs={12} md={6}><Login from={props.location.query.from} /></Layout>
      <Layout item xs={12} md={6}><RegisterForm /></Layout>
    </Layout>
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
