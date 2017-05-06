/**
*
* TitledTextLayout
*
*/

import React from 'react';
import { Layout } from 'material-ui/Layout';
import { Typography } from 'material-ui/Typography';
// import styled from 'styled-components';


function TitledTextLayout(props) {
  return (
    <Layout item xs={props.xs}>
      <Typography type="title" component="h2" gutterBottom>
        {props.desc}
      </Typography>
      <Typography style={{ padding: '8x 16px' }}>
        {props.children}</Typography>
    </Layout>
  );
}

TitledTextLayout.propTypes = {
  xs: React.PropTypes.number.isRequired,
  desc: React.PropTypes.node.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default TitledTextLayout;
